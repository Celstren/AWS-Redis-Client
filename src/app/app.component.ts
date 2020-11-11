import { Component, OnInit } from '@angular/core';
import { WebsocketService } from "./websocket.service";
import { ChatService } from "./chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WebsocketService, ChatService ],
})
export class AppComponent implements OnInit {

  title = "Cliente de Prueba a Redis";
  
  public value: string = null;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.readMessage().subscribe(value => {
      this.value = JSON.stringify(value);
    });
    console.log("start");
  }
}
