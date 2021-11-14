import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url=environment.authBaseUrl;
  key=environment.key;

  constructor(private http:HttpClient) { }
  
  login(body:any):Observable<any>{
    return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`, body).pipe(
      map((res:any) =>{
        this.authSuccess(res.idToken, res.localId);
        return res;
      })
    )
  }

  authSuccess(token: string, userId:string){
    localStorage.setItem('token', token);
    localStorage.setItem('userId',userId)
  }

  getToken():string | null{
    return localStorage.getItem('token');
  }

  getUserID():string| null{
    return localStorage.getItem('userId');
  }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }

  verifyLogged(): boolean{
    const token=localStorage.getItem('token');
    return !!token;
  }

  singUp(body:any){
    return this.http.post(`${this.url}/v1/accounts:signUp?key=${this.key}`,body);
    
  }
}
