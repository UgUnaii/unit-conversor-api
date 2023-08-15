class convertMetricDistance {
	static toMM(value, unit) {
		switch (unit) {
			case 'km':
				return value * 1000000
			case 'hm':
				return value * 100000
			case 'dam':
				return value * 10000
			case 'm':
				return value * 1000
			case 'dm':
				return value * 100
			case 'cm':
				return value * 10
			case 'mm':
				return value
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toCM(value, unit) {
		switch (unit) {
			case 'km':
				return value * 100000
			case 'hm':
				return value * 10000
			case 'dam':
				return value * 1000
			case 'm':
				return value * 100
			case 'dm':
				return value * 10
			case 'cm':
				return value
			case 'mm':
				return value / 10
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toDM(value, unit) {
		switch (unit) {
			case 'km':
				return value * 10000
			case 'hm':
				return value * 1000
			case 'dam':
				return value * 100
			case 'm':
				return value * 10
			case 'dm':
				return value
			case 'cm':
				return value / 10
			case 'mm':
				return value / 100
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toM(value, unit) {
		switch (unit) {
			case 'km':
				return value * 1000
			case 'hm':
				return value * 100
			case 'dam':
				return value * 10
			case 'm':
				return value
			case 'dm':
				return value / 10
			case 'cm':
				return value / 100
			case 'mm':
				return value / 1000
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toDAM(value, unit) {
		switch (unit) {
			case 'km':
				return value * 100
			case 'hm':
				return value * 10
			case 'dam':
				return value
			case 'm':
				return value / 10
			case 'dm':
				return value / 100
			case 'cm':
				return value / 1000
			case 'mm':
				return value / 10000
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toHM(value, unit) {
		switch (unit) {
			case 'km':
				return value * 10
			case 'hm':
				return value
			case 'dam':
				return value / 10
			case 'm':
				return value / 100
			case 'dm':
				return value / 1000
			case 'cm':
				return value / 10000
			case 'mm':
				return value / 100000
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toKM(value, unit) {
		switch (unit) {
			case 'km':
				return value
			case 'hm':
				return value / 10
			case 'dam':
				return value / 100
			case 'm':
				return value / 1000
			case 'dm':
				return value / 10000
			case 'cm':
				return value / 100000
			case 'mm':
				return value / 1000000
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}
}

module.exports = convertMetricDistance
