import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Card} from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) {
  }

  addCard(listId: number, card: Card): Observable<any> {
    return this.http.post(`${environment.backendUrl}/lists/` + listId.toString() + `/cards`, card);
  }

  getCards(listId: number): Observable<Card[]> {
    return this.http.get<Card[]>(`${environment.backendUrl}/lists/` + listId.toString() + `/cards`);
  }


}
