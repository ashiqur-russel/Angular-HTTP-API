import { environment } from './../../environments/environment';
import { UserInterface } from './../UserInterface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;


  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${this.apiUrl}/users`);
  }

  getUser(): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${this.apiUrl}/users/1`);
  }

  createUser(user: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(`${this.apiUrl}/users`, user);
  }

  updateUser(user: UserInterface): Observable<UserInterface> {
    return this.http.put<UserInterface>(`${this.apiUrl}/users/${user.id}`, user);
  }

  patchUser(user: UserInterface): Observable<UserInterface> {
    return this.http.patch<UserInterface>(`${this.apiUrl}/users/${user.id}`, user);
  }


  deleteUser(id: string): Observable<unknown> {
    return this.http.delete<unknown>(`${this.apiUrl}/users/${id}`);
  }
}
