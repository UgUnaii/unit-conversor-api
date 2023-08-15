class convertImperialLiquid {
    static toGallon(value, unit) {
        switch (unit) {
            case 'gallon':
                return value;
            case 'quart':
                return value / 4;
            case 'pint':
                return value / 8;
            case 'cup':
                return value / 16;
            case 'ounce':
                return value / 128;
            default:
                throw new Error(`Can't find conversion for ${unit}`);
        }
    }

    static toQuart(value, unit) {
        switch (unit) {
            case 'gallon':
                return value * 4;
            case 'quart':
                return value;
            case 'pint':
                return value / 2;
            case 'cup':
                return value / 4;
            case 'ounce':
                return value / 32;
            default:
                throw new Error(`Can't find conversion for ${unit}`);
        }
    }

    static toPint(value, unit) {
        switch (unit) {
            case 'gallon':
                return value * 8;
            case 'quart':
                return value * 2;
            case 'pint':
                return value;
            case 'cup':
                return value / 2;
            case 'ounce':
                return value / 16;
            default:
                throw new Error(`Can't find conversion for ${unit}`);
        }
    }

    static toCup(value, unit) {
        switch (unit) {
            case 'gallon':
                return value * 16;
            case 'quart':
                return value * 4;
            case 'pint':
                return value * 2;
            case 'cup':
                return value;
            case 'ounce':
                return value / 8;
            default:
                throw new Error(`Can't find conversion for ${unit}`);
        }
    }

    static toOunce(value, unit) {
        switch (unit) {
            case 'gallon':
                return value * 128;
            case 'quart':
                return value * 32;
            case 'pint':
                return value * 16;
            case 'cup':
                return value * 8;
            case 'ounce':
                return value;
            default:
                throw new Error(`Can't find conversion for ${unit}`);
        }
    }
}

module.exports = convertImperialLiquid