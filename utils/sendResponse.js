const express = require('express')

function sendResponse(req, res, conversion_system, conversion_type, result) {
	const query = req.query

	let data = {
		conversion_system: conversion_system,
		conversion_type: conversion_type,
		input: {
			value: parseInt(query.value),
			unit: query.unit
		},
		result: {
			value: result.value,
			unit: result.unit
		}
	}

	res.json(data)
}

module.exports = { sendResponse }
