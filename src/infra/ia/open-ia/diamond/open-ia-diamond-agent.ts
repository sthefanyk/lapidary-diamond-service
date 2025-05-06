import { IDiamondAgent } from '@/core/diamond-design/application/agent/contracts/diamond-agent.interface'
import { OpenAIService } from '../openai.service'
import { RecommendMethodsPrompt } from '@/core/diamond-design/application/agent/prompts/recommend-methods-prompt'

export class OpenAIDiamondAgent implements IDiamondAgent {
    constructor(private openia: OpenAIService) {}

    async recommendMethods(prompt: RecommendMethodsPrompt): Promise<string> {
        try {
            const response = await this.openia.chat(prompt)

            return response
        } catch (err) {
            console.log(err)
            throw new Error(`Erro ao interpretar resposta da IA`)
        }
    }
}
