const logger = require('../logger')("start")

module.exports = function start(config) {
    logger.highlight('  Starting the app  ');
    logger.debug('Received configuration', config);
}