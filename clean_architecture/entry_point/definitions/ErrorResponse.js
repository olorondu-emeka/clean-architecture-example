function getResponseObject(message, data) {
  return {
    statusCode: 500,
    responseObject: {
      status: 'success',
      message,
      data
    }
  };
}

class ErrorResponse {}

module.exports = ErrorResponse;
