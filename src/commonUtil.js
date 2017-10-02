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

function getCassandraClient() {
	return new cassandra.Client(
		{
			contactPoints: [dbConstants.endpoint], 
			keyspace: [dbConstants.keyspace]
		}
	);
}

module.exports = {
    getCassandraClient,
    sendResponse,
    sendError
}