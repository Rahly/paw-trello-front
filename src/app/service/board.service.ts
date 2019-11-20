import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Board} from '../model/board';
import {List} from '../model/list';

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

  getBoard(boardId: number): Observable<Board> {
    return this.http.get<Board>(`${environment.backendUrl}/boards/` + boardId);
  }

  addList(boardId: number, list: List): Observable<any> {
    return this.http.post(`${environment.backendUrl}/boards/` + boardId.toString() + `/lists`, list);
  }

  getLists(boardId: number): Observable<List[]> {
    return this.http.get<List[]>(`${environment.backendUrl}/boards/` + boardId + `/lists`);
  }

  changeBoardName(board: Board): Observable<any>{
    return this.http.put(`${environment.backendUrl}/boards`, board);
  }
}
