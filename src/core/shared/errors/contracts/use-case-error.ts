import { Errors } from './error'
import { FieldError } from './field-error'

export abstract class UseCaseError extends Errors {
    constructor(
        public readonly nameUseCase: string,
        public readonly message: string,
        public readonly errors: FieldError[] = [],
    ) {
        super(message)
    }

    toJSON() {
        return {
            useCase: this.nameUseCase,
            ...(this.errors.length > 0
                ? { errors: this.errors }
                : { message: this.message }),
        }
    }
}
