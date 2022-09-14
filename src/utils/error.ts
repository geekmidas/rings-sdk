export enum ErrorCode {
  NodeFound = "NOT_FOUND",
}

export class NodeFoundError extends Error {
  public code: ErrorCode;
  constructor(message = "Not found") {
    super(message);
    this.code = ErrorCode.NodeFound;
  }
}
