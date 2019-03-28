import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient ) { }
  getMovielist(){
  	return this.http.get('https://backend-ygzsyibiue.now.sh/api/v1/movies');
  }
  
  getMovieSlug(slugName){
  	return this.http.get('https://backend-ygzsyibiue.now.sh/api/v1/movies/'+slugName);
  }
}
