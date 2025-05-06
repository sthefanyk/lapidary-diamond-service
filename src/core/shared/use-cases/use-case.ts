export abstract class UseCase {
    private _name: string
    private _description: string | null

    get name() {
        return this._name
    }

    get description() {
        return this._description
    }

    public equals(usecase: UseCase) {
        return usecase === this || usecase.name === this._name
    }

    protected constructor(description?: string) {
        this._name = new.target.name
        this._description = description
    }
}
