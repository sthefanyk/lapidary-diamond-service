import { Prompt } from '@/core/diamond-design/application/agent/prompts/prompt'
import OpenAI from 'openai'

export class OpenAIService {
    private client: OpenAI

    constructor(apiKey: string) {
        this.client = new OpenAI({ apiKey })
    }

    async chat(prompt: Prompt): Promise<string> {
        const response = await this.client.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: prompt.systemContent,
                },
                {
                    role: 'user',
                    content: prompt.prompt,
                },
            ],
            temperature: 0.3,
        })
        return response.choices[0].message.content ?? ''
    }
}
