import { Either, Errors, left, right } from '@/core/shared/errors'
import { Diamond } from '../../enterprise/entities/diamond'
import { UseCase } from '@/core/shared/use-cases'
import { IDiamondRepository } from '../contracts/diamond-repository.interface'

type CreateDiamondInput = {
    name: string
    context: string
    businessProblem: string
    userProblem: string
    goals: string[]
}

type CreateDiamondOutput = Either<Errors, { diamond: Diamond }>

export class CreateDiamond extends UseCase {
    constructor(private repository: IDiamondRepository) {
        super('Create a new project')
    }

    async execute({
        name,
        context,
        businessProblem,
        userProblem,
        goals,
    }: CreateDiamondInput): Promise<CreateDiamondOutput> {
        try {
            const diamond = Diamond.create({
                name,
                context,
                businessProblem,
                userProblem,
                goals,
            })

            await this.repository.create(diamond)

            return right({ diamond })
        } catch (error) {
            return left(error)
        }
    }
}
