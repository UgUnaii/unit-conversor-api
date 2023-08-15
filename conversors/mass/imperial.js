class convertImperialMass {
    static toGrain(value, unit) {
        switch (unit) {
            case 'grain':
                return value;
            case 'dram':
                return value * 27.34375;
            case 'ounce':
                return value * 437.5;
            case 'pound':
                return value * 7000;
            default:
                throw new Error(`Can't find conversion for ${unit}`);
        }
    }

    static toDram(value, unit) {
        switch (unit) {
            case 'grain':
                return value * 0.0365714286;
            case 'dram':
                return value;
            case 'ounce':
                return value * 16;
            case 'pound':
                return value * 256;
            default:
                throw new Error(`Can't find conversion for ${unit}`);
        }
    }

    static toOunce(value, unit) {
        switch (unit) {
            case 'grain':
                return value * 0.00228571429;
            case 'dram':
                return value * 0.0625;
            case 'ounce':
                return value;
            case 'pound':
                return value * 16;
            default:
                throw new Error(`Can't find conversion for ${unit}`);
        }
    }

    static toPound(value, unit) {
        switch (unit) {
            case 'grain':
                return value * 0.000142857143;
            case 'dram':
                return value * 0.00390625;
            case 'ounce':
                return value * 0.0625;
            case 'pound':
                return value;
            default:
                throw new Error(`Can't find conversion for ${unit}`);
        }
    }
}

module.exports = convertImperialMass;
