
import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';


export const BRANDS_SEED:Brand[] = [
    {
        id:uuid(),
        name: "Mazda",
        createdAt: new Date().getTime()
    },
    {
        id:uuid(),
        name: "Renault",
        createdAt: new Date().getTime()
    },
    {
        id:uuid(),
        name: "Volkswagen",
        createdAt: new Date().getTime()
    }
]