import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[GithubService]
})
export class ProfileComponent implements OnInit {
  user:any=[];
  repos:any=[];
  username:string;
  
  constructor() { }

  ngOnInit() {
  }

}
