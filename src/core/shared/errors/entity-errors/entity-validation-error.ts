import { EntityError } from '../contracts'
import { FieldError } from '../contracts/field-error'

export class EntityValidationError extends EntityError {
    constructor(nameEntity: string, errors: FieldError[]) {
        super(nameEntity, errors, `Validation failed`)
    }
}
