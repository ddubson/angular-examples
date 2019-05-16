import {Observable} from 'rxjs';
import {Item} from '../items';

export abstract class ItemsService {
  abstract fetchAllItems(): Observable<Item[]>;
}
