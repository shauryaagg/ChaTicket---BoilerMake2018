import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html',
  styles: [`
    .text-success {
      color : green;
    }

    .text-danger{
      color : red;
    }

    .text-special{
      font-style : italic;
    }
  
  `]
})
export class TestComponent implements OnInit {
  
  public name = "Humans";
  constructor() { }

  ngOnInit() {
  }

}
