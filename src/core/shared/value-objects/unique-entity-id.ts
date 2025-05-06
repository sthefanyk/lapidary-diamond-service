import { randomUUID } from 'node:crypto'
import { ValueObject } from './value-object'
import { ValueObjectValidationError } from '../errors/value-objects/value-object-validation-error'

export class UniqueEntityID extends ValueObject {
    private value: string

    public toValue(): string {
        return this.value
    }

    public toString(): string {
        return this.value
    }

    public equals(id: UniqueEntityID) {
        return id.toValue() === this.value
    }

    constructor(value?: string) {
        super()
        const id = value ?? randomUUID()

        if (!UniqueEntityID.isUUID(id)) {
            throw new ValueObjectValidationError(
                this.constructor.name,
                [],
                'UUID invalid',
            )
        }

        this.value = id
    }

    static isUUID(str: string): boolean {
        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
        return uuidRegex.test(str)
    }
}
