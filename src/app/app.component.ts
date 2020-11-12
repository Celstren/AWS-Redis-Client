import { Component, OnInit } from '@angular/core';
import { WebsocketService } from "./websocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WebsocketService ],
})
export class AppComponent {
  constructor() {}
}
