class convertMetricLiquid {
	static toML(value, unit) {
		switch (unit) {
			case 'kl':
				return value * 1000000
			case 'hl':
				return value * 100000
			case 'dal':
				return value * 10000
			case 'l':
				return value * 1000
			case 'dl':
				return value * 100
			case 'cl':
				return value * 10
			case 'ml':
				return value
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toCL(value, unit) {
		switch (unit) {
			case 'kl':
				return value * 100000
			case 'hl':
				return value * 10000
			case 'dal':
				return value * 1000
			case 'l':
				return value * 100
			case 'dl':
				return value * 10
			case 'cl':
				return value
			case 'ml':
				return value / 10
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toDL(value, unit) {
		switch (unit) {
			case 'kl':
				return value * 10000
			case 'hl':
				return value * 1000
			case 'dal':
				return value * 100
			case 'l':
				return value * 10
			case 'dl':
				return value
			case 'cl':
				return value / 10
			case 'ml':
				return value / 100
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toL(value, unit) {
		switch (unit) {
			case 'kl':
				return value * 1000
			case 'hl':
				return value * 100
			case 'dal':
				return value * 10
			case 'l':
				return value
			case 'dl':
				return value / 10
			case 'cl':
				return value / 100
			case 'ml':
				return value / 1000
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toDAL(value, unit) {
		switch (unit) {
			case 'kl':
				return value * 100
			case 'hl':
				return value * 10
			case 'dal':
				return value
			case 'l':
				return value / 10
			case 'dl':
				return value / 100
			case 'cl':
				return value / 1000
			case 'ml':
				return value / 10000
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toHL(value, unit) {
		switch (unit) {
			case 'kl':
				return value * 10
			case 'hl':
				return value
			case 'dal':
				return value / 10
			case 'l':
				return value / 100
			case 'dl':
				return value / 1000
			case 'cl':
				return value / 10000
			case 'ml':
				return value / 100000
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toKL(value, unit) {
		switch (unit) {
			case 'kl':
				return value
			case 'hl':
				return value / 10
			case 'dal':
				return value / 100
			case 'l':
				return value / 1000
			case 'dl':
				return value / 10000
			case 'cl':
				return value / 100000
			case 'ml':
				return value / 1000000
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}
}

module.exports = convertMetricLiquid
