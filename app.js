// Imports
require('dotenv/config')
const express = require('express')
const { readJson } = require('./utils/readJson')
const { fuseSearch } = require('./utils/fuseSearch')
const { sendResponse } = require('./utils/sendResponse')

// Converters
const convertMetricDistance = require('./conversors/distances/metric')
const convertMetricLiquid = require('./conversors/liquid/metric')
const convertMetricMass = require('./conversors/mass/metric')

const convertImperialDistance = require('./conversors/distances/imperial')
const convertImperialLiquid = require('./conversors/liquid/imperial')
const convertImperialMass = require('./conversors/mass/imperial')

// Express
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// ------- Metric conversion -------
// Distance
app.get('/metric/distance/:toUnit', (req, res) => {
	const params = req.params.toUnit
	const query = req.query
	if (
		query['value'] == undefined ||
		query['unit'] == undefined ||
		query == undefined
	) {
		return
	}
	readJson('./definitions/distances.json')
		.then((jsonData) => {
			const functionSearch = fuseSearch(
				jsonData['metric'],
				['name'],
				params
			)
			var conversion = {
				value: null,
				unit: null
			}
			eval(
				`conversion.value = convertMetricDistance.${functionSearch.function}(${query.value}, "${query.unit}")`
			)
			conversion.unit = functionSearch.name.substring(3)
			sendResponse(req, res, 'metric', 'distance', conversion)
		})
		.catch((error) => {
			console.error('Error:', error)
		})
})

// Liquid
app.get('/metric/liquid/:toUnit', (req, res) => {
	const params = req.params.toUnit
	const query = req.query
	if (
		query['value'] == undefined ||
		query['unit'] == undefined ||
		query == undefined
	) {
		return
	}

	readJson('./definitions/liquid.json')
		.then((jsonData) => {
			const functionSearch = fuseSearch(
				jsonData['metric'],
				['name'],
				params
			)
			var conversion = {
				value: null,
				unit: null
			}
			eval(
				`conversion.value = convertMetricLiquid.${functionSearch.function}(${query.value}, "${query.unit}")`
			)
			conversion.unit = functionSearch.name.substring(3)
			sendResponse(req, res, 'metric', 'liquid', conversion)
		})
		.catch((error) => {
			console.error('Error:', error)
		})
})

// Mass
app.get('/metric/mass/:toUnit', (req, res) => {
	const params = req.params.toUnit
	const query = req.query
	if (
		query['value'] == undefined ||
		query['unit'] == undefined ||
		query == undefined
	) {
		return
	}

	readJson('./definitions/mass.json')
		.then((jsonData) => {
			const functionSearch = fuseSearch(
				jsonData['metric'],
				['name'],
				params
			)
			var conversion = {
				value: null,
				unit: null
			}
			eval(
				`conversion.value = convertMetricMass.${functionSearch.function}(${query.value}, "${query.unit}")`
			)
			conversion.unit = functionSearch.name.substring(3)
			sendResponse(req, res, 'metric', 'mass', conversion)
		})
		.catch((error) => {
			console.error('Error:', error)
		})
})

// ------- Imperial conversion -------
// Distance
app.get('/imperial/distance/:toUnit', (req, res) => {
	const params = req.params.toUnit
	const query = req.query
	if (
		query['value'] == undefined ||
		query['unit'] == undefined ||
		query == undefined
	) {
		return
	}
	readJson('./definitions/distances.json')
		.then((jsonData) => {
			const functionSearch = fuseSearch(
				jsonData['imperial'],
				['name'],
				params
			)
			var conversion = {
				value: null,
				unit: null
			}
			eval(
				`conversion.value = convertImperialDistance.${functionSearch.function}(${query.value}, "${query.unit}")`
			)
			conversion.unit = functionSearch.name.substring(3)
			sendResponse(req, res, 'imperial', 'distance', conversion)
		})
		.catch((error) => {
			console.error('Error:', error)
		})
})

// Liquid
app.get('/imperial/liquid/:toUnit', (req, res) => {
	const params = req.params.toUnit
	const query = req.query
	if (
		query['value'] == undefined ||
		query['unit'] == undefined ||
		query == undefined
	) {
		return
	}

	readJson('./definitions/liquid.json')
		.then((jsonData) => {
			const functionSearch = fuseSearch(
				jsonData['imperial'],
				['name'],
				params
			)
			var conversion = {
				value: null,
				unit: null
			}
			eval(
				`conversion.value = convertImperialLiquid.${functionSearch.function}(${query.value}, "${query.unit}")`
			)
			conversion.unit = functionSearch.name.substring(3)
			sendResponse(req, res, 'imperial', 'liquid', conversion)
		})
		.catch((error) => {
			console.error('Error:', error)
		})
})

// Mass
app.get('/imperial/mass/:toUnit', (req, res) => {
	const params = req.params.toUnit
	const query = req.query
	if (
		query['value'] == undefined ||
		query['unit'] == undefined ||
		query == undefined
	) {
		return
	}

	readJson('./definitions/mass.json')
		.then((jsonData) => {
			const functionSearch = fuseSearch(
				jsonData['imperial'],
				['name'],
				params
			)
			var conversion = {
				value: null,
				unit: null
			}
			eval(
				`conversion.value = convertImperialMass.${functionSearch.function}(${query.value}, "${query.unit}")`
			)
			conversion.unit = functionSearch.name.substring(3)
			sendResponse(req, res, 'imperial', 'mass', conversion)
		})
		.catch((error) => {
			console.error('Error:', error)
		})
})

// Port listener
app.listen(PORT, () => {
	console.log(`Server listenging on port ${PORT}`)
})
