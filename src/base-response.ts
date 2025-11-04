// src/common/response/base-response.ts

export enum StatusCode {
    Success = 200,
    Error = 500,
    NotFound = 404,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403
}

export enum Message {
    Create = "Created",
    Update = "Updated",
    Delete = "Deleted"
}

export class BaseResponse<T> {
    statusCode: number;
    message: string;
    totalRecord: number;
    data?: T | null;

    constructor(
        data?: T,
        message = '',
        totalRecord = 0,
        statusCode: number = StatusCode.Success
    ) {
        this.statusCode = statusCode;
        this.message = message;
        this.totalRecord = totalRecord;
        this.data = data ?? null;
    }
}
