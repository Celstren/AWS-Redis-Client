import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { environment } from 'src/environments/environment';
import { WebsocketService } from "./websocket.service";

const CHAT_URL = environment.ws_server;

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public wsService: WebsocketService) {
    
  }

  readMessage() {
    return this.wsService.create(CHAT_URL);
  }
}
