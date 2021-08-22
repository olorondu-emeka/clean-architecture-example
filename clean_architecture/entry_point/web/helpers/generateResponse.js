function generateResponse(res, statusCode, responseObject) {
  // add logging setup, if it exists
  return res.status(statusCode).json(responseObject);
}

module.exports = generateResponse;
