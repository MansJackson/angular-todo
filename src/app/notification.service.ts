import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  text: string = '';
  timer: number = 3000;
  show: boolean = false;

  constructor() { }

  notify(message: string) {
    this.text = message;
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, this.timer);
  }
}
