import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private headers = new HttpHeaders({'Content-Type':'application/json','Authorization': 'my-auth-token'});

  getData() : Promise<any> {
	return this.http.get('http://localhost:3000/users',{headers: this.headers})
	.toPromise()
	.catch(this.handleError)
	console.log('in user service');
  }
  editData(Id) : Promise<any> {
	return this.http.get('http://localhost:3000/user/:id',{headers: this.headers})
	.toPromise()
	.catch(this.handleError)
	console.log('in user service');
  }

  saveData(data) : Promise<any> {
  console.log(data)
	return this.http.post('http://localhost:3000/saveuser',data,{headers: this.headers})
	.toPromise()
	.catch(this.handleError)
	console.log('in user service');
	}
  deleteData(id) : Promise<any> {
	return this.http.delete('http://localhost:3000/deleteuser/:id',{headers: this.headers})
	.toPromise()
	.catch(this.handleError)
	console.log('in user service');
	}


  private handleError(error: any) : Promise<any> {
	return Promise.reject(error.message || error);
  }
}
