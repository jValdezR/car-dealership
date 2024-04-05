import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid} from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dtos/';

@Injectable()
export class CarsService {

    private cars:Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Mazda',
        //     model: '3'
        // },
    ];

    public findAll() {
        return this.cars;
    }

    public findById(id:string) {
        const car = this.cars.find(car => car.id == id);

        if (!car)
            throw new NotFoundException(`Car with id ${id} not found`);
        return car;
    }

    public async create(createCarDto:CreateCarDto){
        const newCar:Car = {
            id: uuid(),
            ...createCarDto
        };
        await this.cars.push(newCar);
        return newCar;
    }

    public async update(id:string, updateCarDto:UpdateCarDto){

        let carDB:Car = await this.findById(id);

        this.cars = this.cars.map(car => {
            if(car.id === id){
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id
                }
                return carDB;
            }
            return car;
        });

        return carDB;
    }

    public async delete(id:string){
        if(this.findById(id))
            this.cars = this.cars.filter(car => car.id !== id);
    }

    public async fillCars(cars: Car[]){
        this.cars = cars;
    }
}
