export class ResponseBody<T> {
  data: T;
  success: boolean;
  message: string;
  error: string | undefined;

  constructor(params: {
    data?: T;
    success: boolean;
    message: string;
    error?: string;
  }) {
    this.data = params.data;
    this.success = params.success;
    this.message = params.message;
    this.error = params.error;
  }
}
