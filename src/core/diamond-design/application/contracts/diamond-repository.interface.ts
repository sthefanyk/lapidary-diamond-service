import { Diamond } from '../../enterprise/entities/diamond'

export interface IDiamondRepository {
    create(diamond: Diamond): Promise<void>
}
