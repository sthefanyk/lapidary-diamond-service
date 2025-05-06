import { Errors } from './contracts/error'

export class UnexpectedError extends Errors {
    constructor(
        public readonly useCaseName: string,
        public readonly errorCause: unknown,
        public readonly useCaseDescription?: string,
    ) {
        super(
            errorCause instanceof Error
                ? errorCause.message
                : 'Unexpected error',
        )
    }

    toJSON() {
        return {
            nameUseCase: this.useCaseName,
            descriptionUseCase: this.useCaseDescription ?? 'No description',
            errorMessage: this.message,
        }
    }
}
