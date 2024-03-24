const fs = require('fs');
const Midi = require('midi-file');
const process = require('process');

// Mapping of MIDI note numbers to frequencies
const noteFrequencies = require('./noteFrequencies').noteFrequencies;

/**
 * Calculates the duration in milliseconds for a given delta time and tempo.
 * @param {number} deltaTime The delta time from the MIDI event.
 * @param {number} tempo The tempo in BPM.
 * @returns {number} The duration in milliseconds.
 */

function calculateDuration(deltaTime, tempo) {
	const noteLengthInSixteenths = (deltaTime/24)*2;

	return Math.round((noteLengthInSixteenths*tempo)*0.520833333);
}

/**
 * Converts a MIDI file to a custom format.
 * @param {string} midiFilePath Path to the MIDI file.
 * @param {string} outputFilePath Path to the output file.
 * @param {number} tempo The tempo in BPM.
 */
function convertMidiToCustomFormat(midiFilePath, outputFilePath, tempo) {
	// Read MIDI file
	const midiData = fs.readFileSync(midiFilePath);
	const midi = Midi.parseMidi(midiData);

	const notes = [];

	// Convert MIDI events to custom format
	const customFormatLines = midi.tracks.flatMap((events) => {
		let totalDelta = 0;
		events.forEach((event,i) => {
			totalDelta += event.deltaTime;
			if (!["noteOn","noteOff"].includes(event.type)) return;
			const noteData = noteFrequencies[event.noteNumber] || {name:"UNKNOWN",frequency:0};
			switch (event.type) {
				case "noteOn":
					const note = {
						frequency: noteData.frequency,
						name: noteData.name,
						start: totalDelta,
						duration: false, // new note, we don't know the duration yet
						isOff: false, // once the note gets turned off, its duration will be calculated
					}
					notes.push(note);
					break;
				case "noteOff":
					for (let i=0;i<notes.length;i++) {
						const note = notes[i];
						if (note.frequency !== noteData.frequency) continue;
						if (note.isOff !== false || note.duration !== false) continue;
						note.isOff = true;
						note.duration = totalDelta-note.start;
						break;
					}
					break;
			}
		});

		const output = [];
		
		let lastPosition = 0;
		notes.forEach((note,i) => {
			const pause = note.start - lastPosition;
			if (pause > 0) {
				output.push(`"P:${calculateDuration(pause,tempo)}",`);

			}
			output.push(`"T:${note.frequency},${calculateDuration(note.duration,tempo)}",`);
			lastPosition += note.duration + pause;
		});

		// console.log(output); // debug output

		return output;
	});

	// Write to the output file
	fs.writeFileSync(outputFilePath, customFormatLines.join('\n'));
}

// Process command-line arguments
const [midiFilePath, outputFilePath, tempo] = process.argv.slice(2);

// Validate input
if (!midiFilePath || !outputFilePath) {
	console.log("Usage: node script.js <MIDI file path> <output file path> <tempo>");
	process.exit(1);
}

// Convert the MIDI file
convertMidiToCustomFormat(midiFilePath, outputFilePath, parseInt(tempo) || 120);
