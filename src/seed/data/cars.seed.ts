import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';


export const CARS_SEED:Car[] = [
    {
        id:uuid(),
        brand: "Mazda",
        model: "3"
    },
    {
        id:uuid(),
        brand: "Renault",
        model: "Clio"
    },
    {
        id:uuid(),
        brand: "Volkswagen",
        model: "Jetta"
    }
]