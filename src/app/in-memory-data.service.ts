import { InMemoryDbService } from 'angular-in-memory-web-api';
import { items } from './items/items-mock-data';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {items};
  }
}