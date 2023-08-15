class convertMetricMass {
    static toMG(value, unit) {
		switch (unit) {
			case 'kg':
				return value * 1000000
			case 'hg':
				return value * 100000
			case 'dag':
				return value * 10000
			case 'g':
				return value * 1000
			case 'dg':
				return value * 100
			case 'cg':
				return value * 10
			case 'mg':
				return value
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toCG(value, unit) {
		switch (unit) {
			case 'kg':
				return value * 100000
			case 'hg':
				return value * 10000
			case 'dag':
				return value * 1000
			case 'g':
				return value * 100
			case 'dg':
				return value * 10
			case 'cg':
				return value
			case 'mg':
				return value / 10
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toDG(value, unit) {
		switch (unit) {
			case 'kg':
				return value * 10000
			case 'hg':
				return value * 1000
			case 'dag':
				return value * 100
			case 'g':
				return value * 10
			case 'dg':
				return value
			case 'cg':
				return value / 10
			case 'mg':
				return value / 100
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toG(value, unit) {
		switch (unit) {
			case 'kg':
				return value * 1000
			case 'hg':
				return value * 100
			case 'dag':
				return value * 10
			case 'g':
				return value
			case 'dg':
				return value / 10
			case 'cg':
				return value / 100
			case 'mg':
				return value / 1000
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toDAG(value, unit) {
		switch (unit) {
			case 'kg':
				return value * 100
			case 'hg':
				return value * 10
			case 'dag':
				return value
			case 'g':
				return value / 10
			case 'dg':
				return value / 100
			case 'cg':
				return value / 1000
			case 'mg':
				return value / 10000
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toHG(value, unit) {
		switch (unit) {
			case 'kg':
				return value * 10
			case 'hg':
				return value
			case 'dag':
				return value / 10
			case 'g':
				return value / 100
			case 'dg':
				return value / 1000
			case 'cg':
				return value / 10000
			case 'mg':
				return value / 100000
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}

	static toKG(value, unit) {
		switch (unit) {
			case 'kg':
				return value
			case 'hg':
				return value / 10
			case 'dag':
				return value / 100
			case 'g':
				return value / 1000
			case 'dg':
				return value / 10000
			case 'cg':
				return value / 100000
			case 'mg':
				return value / 1000000
			default:
				throw new Error(`Can't find conversion for ${unit}`)
		}
	}
}

module.exports = convertMetricMass