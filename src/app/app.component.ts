import { Component } from '@angular/core';
import {ProfileComponent} from './profile/profile.component';
import {HttpClient} from '@angular/common/http';
import { GithubService } from './github.service';

@Component({
  moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GithubService]
})
export class AppComponent {
  title = 'app';
}
