import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';


@Injectable()
export class SeedService {

  constructor(
    private readonly carService: CarsService,
    private readonly brandService:BrandsService
  ){}
  
  populateDB(){
    this.carService.fillCars(CARS_SEED);
    this.brandService.fillBrands(BRANDS_SEED);
 
    return 'seed executed';
  }
}
