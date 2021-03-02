import { Component } from '@angular/core';
import { AppConfig } from './app.config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 })
 export class AppComponent {
 title = 'ConstantsManagerDemo';
 constructor() {
 const apiUrl = AppConfig.Settings.url.apiUrl;
 let elementArray:string[] = AppConfig.Settings.elementArray;
 alert(elementArray);
 
 for (let i = 0; i < 3; i++) {
  console.log ("Block statement execution no." + elementArray[i]);
}

  }

 }