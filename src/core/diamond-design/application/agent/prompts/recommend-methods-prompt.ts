// RecommendMethodsPrompt.ts
import { Prompt } from './prompt'
import { Diamond } from '@/core/diamond-design/enterprise/entities/diamond'

export class RecommendMethodsPrompt extends Prompt {
    constructor(diamond: Diamond) {
        const promptText = RecommendMethodsPrompt.buildPrompt(diamond)
        super({
            role: 'Você é um especialista em UX Research.',
            prompt: promptText,
        })
    }

    static buildPrompt(diamond: Diamond): string {
        return `Com base nos dados do projeto, recomende métodos qualitativos para entender o usuário.
Considere apenas:

- Entrevistas em profundidade
- Jornadas do usuário
- Mapas de empatia
- Diários do usuário
- Histórias de Vida e Rotinas

Responda em JSON:

{
  "recommendedMethods": [
    {
      "name": "Nome do método",
      "why": "Motivo da recomendação"
    }
  ]
}

Entrada:
${diamond.toJson()}`
    }

    createPrompt(): string {
        return this.prompt
    }
}
