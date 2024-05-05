import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_cars, sample_tags } from 'src/data';
import { CARS_BY_SEARCH_URL, CARS_BY_TAG_URL, CARS_TAGS_URL, CARS_URL, CAR_BY_ID_URL } from '../shared/constants/urls';
import { Car } from '../shared/models/Car';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(CARS_URL);
  }

  getAllCarsBySearchTerm(searchTerm: string) {
    return this.http.get<Car[]>(CARS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(CARS_TAGS_URL);
  }

  getAllCarsByTag(tag: string): Observable<Car[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Car[]>(CARS_BY_TAG_URL + tag);
  }

  getCarById(carId:string):Observable<Car>{
    return this.http.get<Car>(CAR_BY_ID_URL + carId);
  }

}
