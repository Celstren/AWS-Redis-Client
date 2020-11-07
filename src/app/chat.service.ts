import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { environment } from 'src/environments/environment';
import { WebsocketService } from "./websocket.service";

const CHAT_URL = environment.ws_server;

export interface Message {
  author: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public messages: Subject<Message>;

  constructor(wsService: WebsocketService) {
    wsService.create(CHAT_URL);
  }
}
