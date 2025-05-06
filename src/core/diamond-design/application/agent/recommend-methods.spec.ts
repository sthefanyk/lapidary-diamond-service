import 'dotenv/config'
import { OpenAIDiamondAgent } from '@/infra/ia/open-ia/diamond/open-ia-diamond-agent'
import { OpenAIService } from '@/infra/ia/open-ia/openai.service'
import { Diamond } from '../../enterprise/entities/diamond'
import { RecommendMethods } from './recommend-methods'

describe('Generate Recommended Methods', () => {
    it('should generate questions', async () => {
        const openaiService = new OpenAIService(process.env.OPENAI_API_KEY!)
        const agent = new OpenAIDiamondAgent(openaiService)
        const trigger = new RecommendMethods(agent)

        const diamond = Diamond.create({
            name: 'Nova identidade da startup fintech Inventory',
            context:
                'A fintech passou por um reposicionamento e precisa comunicar inovação e confiança.',
            businessProblem:
                'A marca atual não transmite os valores e posicionamento desejados.',
            userProblem:
                'Os clientes acham o visual genérico e pouco confiável.',
            goals: [
                'Criar uma identidade visual moderna e coerente',
                'Aumentar o reconhecimento da marca',
                'Alinhar design visual ao tom da nova comunicação',
            ],
        })

        const result = await trigger.generate({
            diamond,
        })

        console.log(result)
    }, 20_000)
})
