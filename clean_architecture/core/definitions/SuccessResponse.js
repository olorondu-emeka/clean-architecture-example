function getResponseObject(statusCode, message, data) {
  return {
    statusCode,
    responseObject: {
      status: 'success',
      message,
      data
    }
  };
}

class SuccessResponse {
  static ok(message, data) {
    return getResponseObject(200, message, data);
  }

  static created(message, data) {
    return getResponseObject(201, message, data);
  }
}

module.exports = SuccessResponse;
