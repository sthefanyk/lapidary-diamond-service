import { InMemoryDiamondRepository } from '@/test/repositories/in-memory/in-memory-diamond'
import { CreateDiamond } from './create-diamond'

describe('Create diamond', () => {
    it('should create a new diamond', async () => {
        const repository = new InMemoryDiamondRepository()
        const usecase = new CreateDiamond(repository)

        const name = 'Nova identidade da startup fintech X'
        const context =
            'A fintech passou por um reposicionamento e precisa comunicar inovação e confiança.'

        const businessProblem =
            'A marca atual não transmite os valores e posicionamento desejados.'

        const userProblem =
            'Os clientes acham o visual genérico e pouco confiável.'

        const goals = [
            'Criar uma identidade visual moderna e coerente',
            'Aumentar o reconhecimento da marca',
            'Alinhar design visual ao tom da nova comunicação',
        ]

        const result = await usecase.execute({
            name,
            context,
            businessProblem,
            userProblem,
            goals,
        })

        expect(result.isRight()).toBeTruthy()

        if (result.isRight()) {
            const { diamond } = result.value
            expect(diamond.name).toBe(name)
            expect(diamond.context).toBe(context)
        }
    })
})
