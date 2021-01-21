import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {

  @Input() myData: any;

  @Output() myOutput:EventEmitter<string> = new EventEmitter();

  public outputData: string = "child to prent share data";

  constructor() {
   }

  ngOnInit(): void {

  }

  shareData() {
    this.myOutput.emit(this.outputData)
  }

}
