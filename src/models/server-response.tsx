interface ServerResponseParams {
  statusCode: number;
  message: string;
  data?: any;
}

export default class ServerResponse {
  statusCode: number;
  message: string;
  data?: any;

  constructor({ statusCode, message, data }: ServerResponseParams) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

  static isOK = (statusCode: number): boolean => statusCode === 200;
}
