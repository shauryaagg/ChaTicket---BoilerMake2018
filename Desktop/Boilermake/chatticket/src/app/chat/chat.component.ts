import { Component, OnInit, Input, Output } from '@angular/core';
import { Button, $ } from 'protractor';
import { DialogflowServiceService } from '../dialogflow-service.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input()
  public str = "";
  public result = "";
  constructor(private _dialogFlowService: DialogflowServiceService) {
   }

  ngOnInit() {
    this._dialogFlowService.getResponse("");
  }

  onClick(value){
    this.str = value;
    console.log(this.str);
    this.spellCorrect(this.str);
  }

  spellCorrect(str) {
    var array = this.str.split(" ");
    
    this.passToDialogFlow(str);
  }

  passToDialogFlow(str) {
    this._dialogFlowService.getResponse(this.str).subscribe(res => {
      this.result = res.result.fulfillment.speech;
      console.log(this.result);
    });
  }
}
