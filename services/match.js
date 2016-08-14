var request = require('./request.js');

/**
 * Get collection of images
 * @param options
 * @returns {axios.Promise|Promise.<T>|*}
 */
function collection() {
    options = options || {};

    return request.get('http://localhost:8080/api/match/')
        .then(function(response) {

            return {
                collection: response.data
            };
        });
}

/**
 * Get single image
 * @param id
 * @param options
 * @returns {*}
 */
function get(id) {
    //@TODO More error checking
    if (!id) {
        throw new Error('image.get: Undefined image id');
    }

    return request.get('http://localhost:8080/api/match/' + id)
        .then(function(response) {
            return {
                match: response
            };
        });
}

module.exports = {
    collection: collection,
    get: get
};
