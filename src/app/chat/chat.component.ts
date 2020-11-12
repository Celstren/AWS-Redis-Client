import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDto } from '../models/chatMessageDto';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  constructor(public chatService: ChatService) { }

  ngOnDestroy(): void {
    this.chatService.closeWebSockets();
  }

  ngOnInit(): void {
    this.chatService.openWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message, "");
    this.chatService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
  }

}
