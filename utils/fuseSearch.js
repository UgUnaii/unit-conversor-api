const Fuse = require('fuse.js')

const fuseSearch = (data, keys, search) => {
    const fuse = new Fuse(data, {
        keys: keys
    })

    const results = fuse.search(search)
    return results[0]['item']
}

module.exports = {
    fuseSearch
}