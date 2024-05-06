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
  car?: Car; // Make car possibly undefined

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.carService.getCarById(params.id).subscribe(
          serverCar => {
            this.car = serverCar;
          },
          error => {
            console.error('Error fetching car:', error);
          }
        );
      }
    });
  }

  addToCart() {
    if (this.car) {
      this.cartService.addToCart(this.car);
      this.router.navigateByUrl('/cart-page');
    } else {
      console.error('Car details not available.');
      // Handle the case where car details are not available
    }
  }
}
