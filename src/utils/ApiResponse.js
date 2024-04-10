// write a cusstom class code for handling api response

class ApiResponse {
  constructor(statusCode, data, message = "Success"){
      this.statusCode = statusCode
      this.data = data
      this.message = message
      this.success = statusCode < 400
  }
}

export { ApiResponse }