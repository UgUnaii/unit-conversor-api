class convertImperialDistance {
	static toThou(value, unit) {
		switch (unit) {
			case 'mile':
				return value * 63360 * 1000
			case 'furlong':
				return value * 660 * 1000
			case 'chain':
				return value * 66 * 1000
			case 'yard':
				return value * 36 * 1000
			case 'foot':
				return value * 12 * 1000
			case 'inch':
				return value * 1000
			case 'thou':
				return value
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toInch(value, unit) {
		switch (unit) {
			case 'mile':
				return value * 63360
			case 'furlong':
				return value * 660
			case 'chain':
				return value * 66
			case 'yard':
				return value * 36
			case 'foot':
				return value * 12
			case 'inch':
				return value
			case 'thou':
				return value / 1000
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toFoot(value, unit) {
		switch (unit) {
			case 'mile':
				return value * 5280
			case 'furlong':
				return value * 660
			case 'chain':
				return value * 66
			case 'yard':
				return value * 3
			case 'foot':
				return value
			case 'inch':
				return value * 12
			case 'thou':
				return value / 12000
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toYard(value, unit) {
		switch (unit) {
			case 'mile':
				return value * 1760
			case 'furlong':
				return value * 220
			case 'chain':
				return value * 22
			case 'yard':
				return value
			case 'foot':
				return value * 3
			case 'inch':
				return value * 36
			case 'thou':
				return value / 36000
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toChain(value, unit) {
		switch (unit) {
			case 'mile':
				return value * 80
			case 'furlong':
				return value * 10
			case 'chain':
				return value
			case 'yard':
				return value * 22
			case 'foot':
				return value * 66
			case 'inch':
				return value * 792
			case 'thou':
				return value / 1.27
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toFurlong(value, unit) {
		switch (unit) {
			case 'mile':
				return value * 8
			case 'furlong':
				return value
			case 'chain':
				return value * 10
			case 'yard':
				return value * 220
			case 'foot':
				return value * 660
			case 'inch':
				return value * 7920
			case 'thou':
				return value / 0.127
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toMile(value, unit) {
		switch (unit) {
			case 'mile':
				return value
			case 'furlong':
				return value / 8
			case 'chain':
				return value / 80
			case 'yard':
				return value / 1760
			case 'foot':
				return value / 5280
			case 'inch':
				return value / 63360
			case 'thou':
				return value / 0.0000254
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}
}

module.exports = convertImperialDistance
