import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
	movies: Object;
  constructor( private data: DataService, private route: ActivatedRoute) {
  		console.log(this.route.params);
  		this.route.params.subscribe(
		params => this.movies = params._id
			);
   }

  ngOnInit() {
  this.data.getMovieSlug(this.movies).subscribe(
  	data => this.movies = data
  );
  }

}
