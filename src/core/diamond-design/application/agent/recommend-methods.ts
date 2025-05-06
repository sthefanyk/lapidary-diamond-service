import { Either, Errors, left, right } from '@/core/shared/errors'
import { Diamond } from '../../enterprise/entities/diamond'
import { RecommendMethodsPrompt } from './prompts/recommend-methods-prompt'
import { IDiamondAgent } from './contracts/diamond-agent.interface'

type RecommendMethodsInput = {
    diamond: Diamond
}

export type RecommendMethodsOutput = Either<Errors, { methods: string }>

export class RecommendMethods {
    constructor(private agent: IDiamondAgent) {}

    async generate({
        diamond,
    }: RecommendMethodsInput): Promise<RecommendMethodsOutput> {
        try {
            const prompt = new RecommendMethodsPrompt(diamond)

            const methods = await this.agent.recommendMethods(prompt)

            return right({ methods })
        } catch (error) {
            return left(error)
        }
    }
}
