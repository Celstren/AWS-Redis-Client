import { Injectable } from '@angular/core';
import * as Rx from "rxjs";
import { webSocket } from "rxjs/webSocket";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  public create(url) {
    let mySubject = webSocket({
      url: url,
    });
    return mySubject;
    // return mySubject.subscribe(
    //   msg => console.log('message received: ' + JSON.stringify(msg)), // Called whenever there is a message from the server.
    //   err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
    //   () => console.log('complete') // Called when connection is closed (for whatever reason).
    // );
  }
}
