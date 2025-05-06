import { Either, Errors, left, right } from '@/core/shared/errors'
import { Diamond } from '../../enterprise/entities/diamond'
import { UseCase } from '@/core/shared/use-cases'
import { IDiamond } from '../contracts/diamond.interface'
import { DiamondDescription } from '../../enterprise/value-objects/diamond-desciption'

type CreateDiamondInput = {
    name: string
    goal: string
}

type CreateDiamondOutput = Either<Errors, { diamond: Diamond }>

export class CreateDiamond extends UseCase {
    constructor(private repository: IDiamond) {
        super('Description')
    }

    async execute({
        name,
        goal,
    }: CreateDiamondInput): Promise<CreateDiamondOutput> {
        try {
            const description = new DiamondDescription({
                goal,
            })

            const diamond = Diamond.create({
                name,
                description,
            })

            await this.repository.create(diamond)

            return right({ diamond })
        } catch (error) {
            return left(error)
        }
    }
}
