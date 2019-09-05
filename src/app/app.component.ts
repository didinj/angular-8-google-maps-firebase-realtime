import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTHORIZATION_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-maps';

  constructor() {
    firebase.initializeApp(config);
  }

}
