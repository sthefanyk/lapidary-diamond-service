import { Diamond } from '../../enterprise/entities/diamond'

export interface IDiamond {
    create(diamond: Diamond): Promise<void>
}
