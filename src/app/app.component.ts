import { Component, OnInit } from '@angular/core';
import { WebSocketsService } from './web-sockets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cache-chat';

  constructor(private webSocketsService: WebSocketsService) {}

  ngOnInit(): void {
    this.webSocketsService.listen("messages").subscribe((data) => {
      console.log(data);
    });
  }
}
