const fs = require('fs')

function readJson(jsonFilePath) {
	return new Promise((resolve, reject) => {
		fs.readFile(jsonFilePath, 'utf8', (err, data) => {
			if (err) {
				reject(err)
				return
			}

			try {
				const jsonData = JSON.parse(data)
				resolve(jsonData)
			} catch (parseError) {
				reject(parseError)
			}
		})
	})
}

module.exports = {
	readJson
}
