const cassandra = require('cassandra-driver');
const { dbConstants } = require('./config');

function sendResponse(res, data) {
  res.send({
      data
  });
}

function sendError(res, statusCode, error, data) {
	res.status(statusCode);
	res.send({
		error: error.message,
		data: data,
	});
}

module.exports = {
    sendResponse,
    sendError
}