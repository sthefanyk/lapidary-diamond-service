import { Entity } from '@/core/shared/entities'
import {
    EntityValidationError,
    FieldError,
    FieldErrorCode,
} from '@/core/shared/errors'
import { Optional } from '@/core/shared/types/optional'
import { UniqueEntityID } from '@/core/shared/value-objects'

export interface DiamondProps {
    name: string
    context: string
    businessProblem: string
    userProblem: string
    goals: string[]
    hypotheses?: string[]
    successIndicators?: string[]
    // status: 'discovery' | 'definition' | 'ideation' | 'experimentation'
    // stakeholders?: Stakeholder[]
    createdAt: Date
    updatedAt: Date
}

export class Diamond extends Entity<DiamondProps> {
    get name(): string {
        return this.props.name
    }

    get context(): string {
        return this.props.context
    }

    get businessProblem(): string {
        return this.props.businessProblem
    }

    get userProblem(): string {
        return this.props.userProblem
    }

    get goals(): string[] {
        return this.props.goals
    }

    get hypotheses(): string[] {
        return this.props.hypotheses
    }

    get successIndicators(): string[] {
        return this.props.successIndicators
    }

    get createdAt(): Date {
        return this.props.createdAt
    }

    get updatedAt(): Date {
        return this.props.updatedAt
    }

    public toJson() {
        return JSON.stringify(
            {
                projectName: this.name,
                context: this.context,
                businessProblem: this.businessProblem,
                userProblem: this.userProblem,
                goals: this.goals,
            },
            null,
            2,
        )
    }

    static create(
        props: Optional<
            DiamondProps,
            'hypotheses' | 'successIndicators' | 'createdAt' | 'updatedAt'
        >,
        id?: UniqueEntityID,
    ) {
        this.validate(props)

        const diamond = new Diamond(
            {
                ...props,
                hypotheses: props.hypotheses ?? [],
                successIndicators: props.successIndicators ?? [],
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            id,
        )

        return diamond
    }

    static validate(
        props: Optional<
            DiamondProps,
            'hypotheses' | 'successIndicators' | 'createdAt' | 'updatedAt'
        >,
    ) {
        const errors: FieldError[] = []

        if (!props.name?.trim()) {
            errors.push({
                field: 'name',
                message: 'Cannot be empty',
                code: FieldErrorCode.REQUIRED,
            })
        }

        if (!props.context?.trim()) {
            errors.push({
                field: 'context',
                message: 'Cannot be empty',
                code: FieldErrorCode.REQUIRED,
            })
        }

        if (!props.businessProblem?.trim()) {
            errors.push({
                field: 'businessProblem',
                message: 'Cannot be empty',
                code: FieldErrorCode.REQUIRED,
            })
        }

        if (!props.userProblem?.trim()) {
            errors.push({
                field: 'userProblem',
                message: 'Cannot be empty',
                code: FieldErrorCode.REQUIRED,
            })
        }

        if (props.goals.length === 0) {
            errors.push({
                field: 'goals',
                message: 'Cannot be empty',
                code: FieldErrorCode.REQUIRED,
            })
        }

        if (errors.length > 0) {
            throw new EntityValidationError(this.constructor.name, errors)
        }
    }
}
