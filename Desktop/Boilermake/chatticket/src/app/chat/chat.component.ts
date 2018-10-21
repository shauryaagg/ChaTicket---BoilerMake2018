import { Component, OnInit, Input, Output } from '@angular/core';
import { Button, $ } from 'protractor';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input()
  public string = "";
  constructor() { }

  ngOnInit() {
  }
  onClick(value){
    this.string = value;
  }


}
