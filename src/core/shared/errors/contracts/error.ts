export abstract class Errors extends Error {
    constructor(message: string) {
        super(message)
    }

    abstract toJSON(): Record<string, unknown>
}
