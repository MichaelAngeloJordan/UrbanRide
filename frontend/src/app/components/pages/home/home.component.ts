import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/shared/models/Car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: Car[] = [];
  constructor(private carService: CarService, activatedRoute: ActivatedRoute) {
    let carsObservalbe:Observable<Car[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        carsObservalbe = this.carService.getAllCarsBySearchTerm(params.searchTerm);
      else if (params.tag)
        carsObservalbe = this.carService.getAllCarsByTag(params.tag);
      else
        carsObservalbe = carService.getAll();

        carsObservalbe.subscribe((serverCars) => {
          this.cars = serverCars;
        })
    })
  }

  ngOnInit(): void {
  }

}
