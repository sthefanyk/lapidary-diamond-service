import { FieldError } from '../contracts/field-error'
import { ValueObjectError } from '../contracts/value-object-error'

export class ValueObjectValidationError extends ValueObjectError {
    constructor(
        nameValueObject: string,
        errors: FieldError[],
        message?: string,
    ) {
        super(nameValueObject, errors, message ?? `Validation failed`)
    }
}
