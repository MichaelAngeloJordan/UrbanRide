import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define Car interface
export interface Car {
  id: string;
  name: string;
  rentTime: string;
  price: number;
  favorite: boolean;
  origins: string[];
  stars: number;
  imageUrl: string;
  tags: string[];
}

// Define Tag interface
export interface Tag {
  name: string;
  count: number;
}

export class BaseService {
  public getJsonValue: any;
  public postJsonValue: any;

  constructor(protected http: HttpClient) {}

  public getMethod() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  // You can now use Car and Tag interfaces in other methods or properties if needed
}
