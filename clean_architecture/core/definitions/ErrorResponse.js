function getResponseObject(statusCode, message) {
  return {
    statusCode,
    responseObject: {
      status: 'error',
      message,
      data: null
    }
  };
}

class ErrorResponse {
  static badRequest(message) {
    return getResponseObject(400, message);
  }

  static notFound(message) {
    return getResponseObject(404, message);
  }

  static conflict(message) {
    return getResponseObject(409, message);
  }

  static serverError(message) {
    return getResponseObject(500, message);
  }
}

module.exports = ErrorResponse;
