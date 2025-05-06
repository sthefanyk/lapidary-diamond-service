import { Errors } from './error'
import { FieldError } from './field-error'

export abstract class EntityError extends Errors {
    constructor(
        public readonly nameEntity: string,
        public readonly errors: FieldError[] = [],
        message: string,
    ) {
        super(message)
        Object.setPrototypeOf(this, new.target.prototype)
    }

    toJSON() {
        return {
            entity: this.nameEntity,
            ...(this.errors.length > 0
                ? { errors: this.errors }
                : { message: this.message }),
        }
    }
}
