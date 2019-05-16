import {ItemsService} from './items-service';
import {Item} from '../items';
import {Observable} from 'rxjs';

export class FakeItemsService extends ItemsService {
  fetchAllItems(): Observable<Item[]> {
    return Observable.create(subscriber => {
      subscriber.next({ id: 1, name: 'Item 1'});
      subscriber.next({ id: 2, name: 'Item 2'});
      subscriber.complete();
    });
  }
}
