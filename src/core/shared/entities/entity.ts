import { UniqueEntityID } from '../value-objects'

export abstract class Entity<T> {
    private _id: UniqueEntityID
    protected props: T

    get id() {
        return this._id
    }

    public equals(entity: Entity<unknown>) {
        if (entity === this) {
            return true
        }

        if (entity.id === this._id) {
            return true
        }

        return false
    }

    protected constructor(props: T, id?: UniqueEntityID) {
        this._id = id ?? new UniqueEntityID()
        this.props = props
    }
}
