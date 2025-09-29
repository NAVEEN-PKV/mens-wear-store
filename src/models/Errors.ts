
export class CriticalError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CriticalError";
  }

  
  handleFailure(): never {
    throw new Error(`Critical Failure: ${this.message}`);
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}
