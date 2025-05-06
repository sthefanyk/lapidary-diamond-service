export enum FieldErrorCode {
    REQUIRED = 'REQUIRED',
    INVALID_FORMAT = 'INVALID_FORMAT',
    TOO_SHORT = 'TOO_SHORT',
    TOO_LONG = 'TOO_LONG',
    INVALID_VALUE = 'INVALID_VALUE',
    NOT_UNIQUE = 'NOT_UNIQUE',
    OUT_OF_RANGE = 'OUT_OF_RANGE',
    MISMATCH = 'MISMATCH',
    NOT_FOUND = 'NOT_FOUND',
    UNAUTHORIZED = 'UNAUTHORIZED',
    CONFLICT = 'CONFLICT',
    INVALID_TYPE = 'INVALID_TYPE',
}

export interface FieldError {
    field: string
    message: string
    code?: FieldErrorCode
}
