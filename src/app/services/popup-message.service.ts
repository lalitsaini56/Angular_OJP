import { Injectable } from '@angular/core';

declare var swal;
@Injectable({
  providedIn: 'root'
})

export class PopupMessageService {

  constructor() { }

  DisplayPopMessage(title: string, message: string, messageType: MessageType){
    console.log(title + message + messageType)
    swal(title, message, messageType);
  }
}

 export enum MessageType {
  success ="success",
  alert = "info",
  error = "error"
}
