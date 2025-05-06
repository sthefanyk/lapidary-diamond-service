import { Entity } from '@/core/shared/entities'

interface PromptProps {
    role: string
    prompt: string
}

export abstract class Prompt {
    readonly systemContent: string
    readonly prompt: string

    constructor(props: PromptProps) {
        this.systemContent = props.role
        this.prompt = props.prompt
    }

    abstract createPrompt(entity: Entity<any>): string
}
