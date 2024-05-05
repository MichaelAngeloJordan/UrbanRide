import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/shared/models/Car';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {
  car!: Car;
  constructor(activatedRoute:ActivatedRoute, carService:CarService,
    private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      carService.getCarById(params.id).subscribe(serverCar => {
        this.car = serverCar;
      });
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.car);
    this.router.navigateByUrl('/cart-page');
  }
}
