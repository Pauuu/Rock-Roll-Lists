import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Band } from '../models/band';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bands: Band[] = [
      {
        id: 1,
        name: 'The Rolling Stones',
        info: 'las rocas que ruedan',
      },
      {
        id: 2,
        name: 'Led Zeppelin',
        info: 'madre mia con los zepelines',
        video: 'https://www.youtube.com/watch?v=UmaY82inPcM'
      },
      {
        id: 3,
        name: 'Queen',
        info: 'No es una reina que canta'
      }, 
      {
        id: 4,
        name: 'Pink Floyd',
        info: 'molan mucho',
        video: 'https://www.youtube.com/watch?v=YR5ApYxkU-U'
      }
    ];

    return { bands };
  }


}
