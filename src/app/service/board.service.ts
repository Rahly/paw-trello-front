import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Board} from '../model/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) {
  }

  addBoard(board: Board): Observable<any> {
    return this.http.post(`${environment.backendUrl}/boards`, board);
  }

  getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(`${environment.backendUrl}/boards`);
  }
}
