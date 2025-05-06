import { RecommendMethodsPrompt } from '../prompts/recommend-methods-prompt'

export interface IDiamondAgent {
    recommendMethods(prompt: RecommendMethodsPrompt): Promise<string>
}
