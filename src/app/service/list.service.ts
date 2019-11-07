import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {List} from '../model/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) {
  }

  addList(boardId: number, list: List): Observable<any> {
    return this.http.post(`${environment.backendUrl}/boards/` + boardId.toString() + `/lists`, list);
  }

  getLists(boardId: number): Observable<List[]> {
    return this.http.get<List[]>(`${environment.backendUrl}/boards/` + boardId.toString() + `/lists`);
  }


}
