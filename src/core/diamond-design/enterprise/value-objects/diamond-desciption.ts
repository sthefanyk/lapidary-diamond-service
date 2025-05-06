interface DiamondDescriptionProps {
    goal: string
    problem?: string
    targetAudience?: string
    contextOfUsage?: string[]
    premises?: string[]
    retrictions?: string[]
    questionsKey?: string[]
    insightsInitials?: string[]
}

export class DiamondDescription {
    public readonly goal: string
    public readonly problem: string
    public readonly targetAudience?: string
    public readonly contextOfUsage?: string[]
    public readonly premises?: string[]
    public readonly retrictions?: string[]
    public readonly questionsKey?: string[]
    public readonly insightsInitials?: string[]

    constructor(props: DiamondDescriptionProps) {
        if (!props.goal?.trim()) {
            throw new Error('Goal cannot be empty')
        }

        this.problem = props.problem ?? ''
        this.targetAudience = props.targetAudience ?? ''
        this.contextOfUsage = props.contextOfUsage ?? []
        this.premises = props.premises ?? []
        this.retrictions = props.retrictions ?? []
        this.questionsKey = props.questionsKey ?? []
        this.insightsInitials = props.insightsInitials ?? []
    }
}
