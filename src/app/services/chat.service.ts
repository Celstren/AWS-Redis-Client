import { Injectable } from '@angular/core';
import { ChatMessageDto } from '../models/chatMessageDto';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const CHAT_URL = environment.ws_server;
const SERVER = environment.server;

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  webSocket: WebSocket;
  chatMessages: ChatMessageDto[] = [];

  constructor(private http: HttpClient) { }

  public openWebSocket() {
    this.webSocket = new WebSocket(CHAT_URL);

    this.getData();

    this.webSocket.onopen = (event) => {
      console.log('open: ', event);
    };

    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(chatMessageDto);
    };

    this.webSocket.onclose = (event) => {
      console.log('close: ', event);
    };
  }

  public getData() {
    this.http.get<Array<Object>>(SERVER + "/messages").subscribe(data => {
      data.forEach(element => {
        const chatMessageDto = element as ChatMessageDto;
        this.chatMessages.push(chatMessageDto);
      });
      this.chatMessages.sort(function (a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    });
  }

  public sendMessage(chatMessageDto: ChatMessageDto) {
    try {
      this.http.post(SERVER + "/messages", chatMessageDto).subscribe(data => {
        console.log(data);
      });
    } catch (e) {
      console.log(e);
    }
  }

  public closeWebSockets() {
    this.webSocket.close();
  }
}
