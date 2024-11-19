export class ApiError extends Error {
  statusCode: number;
  message: string;
  errors: any;
  data: null;
  stack: string;

  constructor(
    statusCode: number,
    message = "something went wrong",
    data = null,
    stack = "",
    errors = []
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.message = message;
    this.data = data;
    this.stack = stack;
  }

  if(stack: string) {
    this.stack = stack;
  }
}
