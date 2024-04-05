
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {

    constructor(
        private readonly carsService: CarsService,
    ) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }
    @Get(':id')
    getCarbyId(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.findById(id);
    }

    @Post()
    async createCar(@Body() createCarDto: CreateCarDto) {
        return await this.carsService.create(createCarDto);
    }

    @Patch(':id')
    async updateCar(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDto) {
        return await this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {

        return this.carsService.delete(id);
    }
}
