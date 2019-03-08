import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', dateString: '2019-03-01', date: new Date() },
      { id: 12, name: 'Narco', dateString: '2019-03-01', date: new Date() },
      { id: 13, name: 'Bombasto', dateString: '2019-03-01', date: new Date() },
      { id: 14, name: 'Celeritas', dateString: '2019-03-01', date: new Date() },
      { id: 15, name: 'Magneta', dateString: '2019-03-01', date: new Date() },
      { id: 16, name: 'RubberMan', dateString: '2019-03-01', date: new Date() },
      { id: 17, name: 'Dynama', dateString: '2019-03-01', date: new Date() },
      { id: 18, name: 'Dr IQ', dateString: '2019-03-01', date: new Date() },
      { id: 19, name: 'Magma', dateString: '2019-03-01', date: new Date() },
      { id: 20, name: 'Tornado', dateString: '2019-03-01', date: new Date() }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
