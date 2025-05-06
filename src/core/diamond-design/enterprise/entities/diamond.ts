import { Entity } from '@/core/shared/entities'
import { DiamondDescription } from '../value-objects/diamond-desciption'
import { Optional } from '@/core/shared/types/optional'
import { UniqueEntityID } from '@/core/shared/value-objects'

export interface DiamondProps {
    name: string
    description: DiamondDescription
    status: 'discovery' | 'definition' | 'ideation' | 'experimentation'
    createdAt: Date
    updatedAt: Date
}

export class Diamond extends Entity<DiamondProps> {
    get name(): string {
        return this.props.name
    }

    get description(): DiamondDescription {
        return this.props.description
    }

    get status(): string {
        return this.props.status
    }

    get createdAt(): Date {
        return this.props.createdAt
    }

    get updatedAt(): Date {
        return this.props.updatedAt
    }

    static create(
        props: Optional<DiamondProps, 'status' | 'createdAt' | 'updatedAt'>,
        id?: UniqueEntityID,
    ) {
        const diamond = new Diamond(
            {
                ...props,
                status: 'discovery',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            id,
        )

        return diamond
    }
}
