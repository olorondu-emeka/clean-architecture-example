function generateResponse(res, statusCode, responseObject) {
  // add logging setup, if it exists
  return res.statusCode(statusCode).json(responseObject);
}

module.exports = generateResponse;
