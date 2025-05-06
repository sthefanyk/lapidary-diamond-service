import { IDiamondRepository } from '@/core/diamond-design/application/contracts/diamond-repository.interface'
import { Diamond } from '@/core/diamond-design/enterprise/entities/diamond'

export class InMemoryDiamondRepository implements IDiamondRepository {
    public items: Diamond[] = []
    async create(diamond: Diamond): Promise<void> {
        this.items.push(diamond)
    }
}
