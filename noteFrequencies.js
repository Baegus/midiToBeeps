const noteFrequencies = {
	0: {
		"name": "C-1",
		"frequency": 8
	},
	1: {
		"name": "C#",
		"frequency": 9
	},
	2: {
		"name": "D",
		"frequency": 9
	},
	3: {
		"name": "D#",
		"frequency": 10
	},
	4: {
		"name": "E",
		"frequency": 10
	},
	5: {
		"name": "F",
		"frequency": 11
	},
	6: {
		"name": "F#",
		"frequency": 12
	},
	7: {
		"name": "G",
		"frequency": 12
	},
	8: {
		"name": "G#",
		"frequency": 13
	},
	9: {
		"name": "A",
		"frequency": 14
	},
	10: {
		"name": "A#",
		"frequency": 15
	},
	11: {
		"name": "B",
		"frequency": 15
	},
	12: {
		"name": "C0",
		"frequency": 16
	},
	13: {
		"name": "C#",
		"frequency": 17
	},
	14: {
		"name": "D",
		"frequency": 18
	},
	15: {
		"name": "D#",
		"frequency": 19
	},
	16: {
		"name": "E",
		"frequency": 21
	},
	17: {
		"name": "F",
		"frequency": 22
	},
	18: {
		"name": "F#",
		"frequency": 23
	},
	19: {
		"name": "G",
		"frequency": 25
	},
	20: {
		"name": "G#",
		"frequency": 26
	},
	21: {
		"name": "A0",
		"frequency": 28
	},
	22: {
		"name": "A#0/Bb0",
		"frequency": 29
	},
	23: {
		"name": "B0",
		"frequency": 31
	},
	24: {
		"name": "C1",
		"frequency": 33
	},
	25: {
		"name": "C#1/Db1",
		"frequency": 35
	},
	26: {
		"name": "D1",
		"frequency": 37
	},
	27: {
		"name": "D#1/Eb1",
		"frequency": 39
	},
	28: {
		"name": "E1",
		"frequency": 41
	},
	29: {
		"name": "F1",
		"frequency": 44
	},
	30: {
		"name": "F#1/Gb1",
		"frequency": 46
	},
	31: {
		"name": "G1",
		"frequency": 49
	},
	32: {
		"name": "G#1/Ab1",
		"frequency": 52
	},
	33: {
		"name": "A1",
		"frequency": 55
	},
	34: {
		"name": "A#1/Bb1",
		"frequency": 58
	},
	35: {
		"name": "B1",
		"frequency": 62
	},
	36: {
		"name": "C2",
		"frequency": 65
	},
	37: {
		"name": "C#2/Db2",
		"frequency": 69
	},
	38: {
		"name": "D2",
		"frequency": 73
	},
	39: {
		"name": "D#2/Eb2",
		"frequency": 78
	},
	40: {
		"name": "E2",
		"frequency": 82
	},
	41: {
		"name": "F2",
		"frequency": 87
	},
	42: {
		"name": "F#2/Gb2",
		"frequency": 93
	},
	43: {
		"name": "G2",
		"frequency": 98
	},
	44: {
		"name": "G#2/Ab2",
		"frequency": 104
	},
	45: {
		"name": "A2",
		"frequency": 110
	},
	46: {
		"name": "A#2/Bb2",
		"frequency": 117
	},
	47: {
		"name": "B2",
		"frequency": 123
	},
	48: {
		"name": "C3",
		"frequency": 131
	},
	49: {
		"name": "C#3/Db3",
		"frequency": 139
	},
	50: {
		"name": "D3",
		"frequency": 147
	},
	51: {
		"name": "D#3/Eb3",
		"frequency": 156
	},
	52: {
		"name": "E3",
		"frequency": 165
	},
	53: {
		"name": "F3",
		"frequency": 175
	},
	54: {
		"name": "F#3/Gb3",
		"frequency": 185
	},
	55: {
		"name": "G3",
		"frequency": 196
	},
	56: {
		"name": "G#3/Ab3",
		"frequency": 208
	},
	57: {
		"name": "A3",
		"frequency": 220
	},
	58: {
		"name": "A#3/Bb3",
		"frequency": 233
	},
	59: {
		"name": "B3",
		"frequency": 247
	},
	60: {
		"name": "C4 (middle C)",
		"frequency": 262
	},
	61: {
		"name": "C#4/Db4",
		"frequency": 277
	},
	62: {
		"name": "D4",
		"frequency": 294
	},
	63: {
		"name": "D#4/Eb4",
		"frequency": 311
	},
	64: {
		"name": "E4",
		"frequency": 330
	},
	65: {
		"name": "F4",
		"frequency": 349
	},
	66: {
		"name": "F#4/Gb4",
		"frequency": 370
	},
	67: {
		"name": "G4",
		"frequency": 392
	},
	68: {
		"name": "G#4/Ab4",
		"frequency": 415
	},
	69: {
		"name": "A4 concert pitch",
		"frequency": 440
	},
	70: {
		"name": "A#4/Bb4",
		"frequency": 466
	},
	71: {
		"name": "B4",
		"frequency": 494
	},
	72: {
		"name": "C5",
		"frequency": 523
	},
	73: {
		"name": "C#5/Db5",
		"frequency": 554
	},
	74: {
		"name": "D5",
		"frequency": 587
	},
	75: {
		"name": "D#5/Eb5",
		"frequency": 622
	},
	76: {
		"name": "E5",
		"frequency": 659
	},
	77: {
		"name": "F5",
		"frequency": 698
	},
	78: {
		"name": "F#5/Gb5",
		"frequency": 740
	},
	79: {
		"name": "G5",
		"frequency": 784
	},
	80: {
		"name": "G#5/Ab5",
		"frequency": 831
	},
	81: {
		"name": "A5",
		"frequency": 880
	},
	82: {
		"name": "A#5/Bb5",
		"frequency": 932
	},
	83: {
		"name": "B5",
		"frequency": 988
	},
	84: {
		"name": "C6",
		"frequency": 1047
	},
	85: {
		"name": "C#6/Db6",
		"frequency": 1109
	},
	86: {
		"name": "D6",
		"frequency": 1175
	},
	87: {
		"name": "D#6/Eb6",
		"frequency": 1245
	},
	88: {
		"name": "E6",
		"frequency": 1319
	},
	89: {
		"name": "F6",
		"frequency": 1397
	},
	90: {
		"name": "F#6/Gb6",
		"frequency": 1480
	},
	91: {
		"name": "G6",
		"frequency": 1568
	},
	92: {
		"name": "G#6/Ab6",
		"frequency": 1661
	},
	93: {
		"name": "A6",
		"frequency": 1760
	},
	94: {
		"name": "A#6/Bb6",
		"frequency": 1865
	},
	95: {
		"name": "B6",
		"frequency": 1976
	},
	96: {
		"name": "C7",
		"frequency": 2093
	},
	97: {
		"name": "C#7/Db7",
		"frequency": 2217
	},
	98: {
		"name": "D7",
		"frequency": 2349
	},
	99: {
		"name": "D#7/Eb7",
		"frequency": 2489
	},
	100: {
		"name": "E7",
		"frequency": 2637
	},
	101: {
		"name": "F7",
		"frequency": 2794
	},
	102: {
		"name": "F#7/Gb7",
		"frequency": 2960
	},
	103: {
		"name": "G7",
		"frequency": 3136
	},
	104: {
		"name": "G#7/Ab7",
		"frequency": 3322
	},
	105: {
		"name": "A7",
		"frequency": 3520
	},
	106: {
		"name": "A#7/Bb7",
		"frequency": 3729
	},
	107: {
		"name": "B7",
		"frequency": 3951
	},
	108: {
		"name": "C8",
		"frequency": 4186
	},
	109: {
		"name": "C#8/Db8",
		"frequency": 4435
	},
	110: {
		"name": "D8",
		"frequency": 4699
	},
	111: {
		"name": "D#8/Eb8",
		"frequency": 4978
	},
	112: {
		"name": "E8",
		"frequency": 5274
	},
	113: {
		"name": "F8",
		"frequency": 5588
	},
	114: {
		"name": "F#8/Gb8",
		"frequency": 5920
	},
	115: {
		"name": "G8",
		"frequency": 6272
	},
	116: {
		"name": "G#8/Ab8",
		"frequency": 6645
	},
	117: {
		"name": "A8",
		"frequency": 7040
	},
	118: {
		"name": "A#8/Bb8",
		"frequency": 7459
	},
	119: {
		"name": "B8",
		"frequency": 7902
	},
	120: {
		"name": "C9",
		"frequency": 8372
	},
	121: {
		"name": "C#9/Db9",
		"frequency": 8870
	},
	122: {
		"name": "D9",
		"frequency": 9397
	},
	123: {
		"name": "D#9/Eb9",
		"frequency": 9956
	},
	124: {
		"name": "E9",
		"frequency": 10548
	},
	125: {
		"name": "F9",
		"frequency": 11175
	},
	126: {
		"name": "F#9/Gb9",
		"frequency": 11840
	},
	127: {
		"name": "G9",
		"frequency": 12544
	}
};

exports.noteFrequencies = noteFrequencies;