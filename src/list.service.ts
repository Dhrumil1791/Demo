import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  data: any;

  constructor(private http:HttpClient ) { }

   getList() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  setData(data:any){
    this.data = data;
}

getData():any{
    return this.data;
}
}
