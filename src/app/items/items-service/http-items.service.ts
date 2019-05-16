import {Injectable} from '@angular/core';
import {ItemsService} from './items-service';
import {Observable} from 'rxjs';
import {Item} from '../items';

@Injectable({
  providedIn: 'root'
})
export class HttpItemsService extends ItemsService {
  constructor() {
    super();
  }

  fetchAllItems(): Observable<Item[]> {
    return undefined;
  }
}
