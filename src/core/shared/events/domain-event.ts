import { UniqueEntityID } from '../value-objects'

export interface DomainEvent {
    ocurredAt: Date
    getAggregateId(): UniqueEntityID
}
