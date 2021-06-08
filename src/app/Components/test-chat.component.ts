import * as signalR from "@microsoft/signalr";
import {
  Component, Inject, OnInit
} from '@angular/core';



@Component({
  selector: 'test-chat',
  templateUrl: "./html/test-chat.html",
  styleUrls: ["./styles/test-chat.scss"]
})
export class TestChatComponent implements OnInit {
    connection: any;
    data: string = 'first message';
    username = new Date().getTime();
    ngOnInit(): void {
        const connection = new signalR.HubConnectionBuilder()  
        .configureLogging(signalR.LogLevel.Trace)
        .withUrl('https://localhost:44319/chat', {
          skipNegotiation: true,
          transport: 1
        }).withAutomaticReconnect()
        .build();  
        this.connection = connection;
        console.log(connection)
    connection.start().then(function () {  
    console.log('SignalR Connected!');  
    }).catch(function (err) {  
    return console.error(err.toString());
    
    });
    };

    getData(): string {
      let userName = 1;
      this.connection.on("messageReceived", (username: number, message: string) => {
        this.data = message;
        userName = username;
    })
    return userName + ' : ' + this.data;
    }


    send(): void {
        const inputElement = <HTMLInputElement> document.getElementById("tbMessage");
        this.connection.send("newMessage", this.username, inputElement.value);
    }
}