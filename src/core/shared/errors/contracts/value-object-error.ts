import { Errors } from './error'
import { FieldError } from './field-error'

export abstract class ValueObjectError extends Errors {
    constructor(
        public readonly nameValueObject: string,
        public readonly errors: FieldError[] = [],
        message: string,
    ) {
        super(message)
    }

    toJSON() {
        return {
            valueObject: this.nameValueObject,
            ...(this.errors.length > 0
                ? { errors: this.errors }
                : { message: this.message }),
        }
    }
}
