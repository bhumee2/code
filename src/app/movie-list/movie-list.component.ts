import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  animations:[
  trigger('animate',[
  	transition('* <=> *',[
		query(':enter',
		[
			style({opacity:0, transform:'translateX(-15px)'}),
			stagger('50ms',animate('500ms ease-out',style({opacity:1, transform:'translateX(0px)'})))
		], {optional:true}),
		query(':leave', animate('50ms', style({opacity:0})),{optional:true})
		
	])
  ]) 
  ]
})
export class MovieListComponent implements OnInit {
	movies: Object;
  constructor( private data: DataService) { }

  ngOnInit() {
	this.data.getMovielist().subscribe(
   	  data => this.movies = data
   );
}
}
