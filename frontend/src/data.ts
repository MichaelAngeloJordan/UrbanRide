import { Car } from './app/shared/models/Car';
import { Tag } from './app/shared/models/Tag';

export const sample_cars: Car[] = [
  {
    id:'1',
    name: 'Alhart',
    rentTime: '1',
    price: 10,
    favorite: false,
    origins: ['Indonesia'],
    stars: 4.5,
    imageUrl: 'assets/Alphart.jpg',
    tags: ['Family Car'],
  },
]
export const sample_tags:Tag[] = [
  { name: 'All', count: 4 },
  { name: 'Suv', count: 2 },
  { name: 'Family Car', count: 2 },
  { name: 'Sedan', count: 2 },
]
