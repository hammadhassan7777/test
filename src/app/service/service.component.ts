import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private apiService:ApiService) {
    this.apiService.nameChange.subscribe(val => {
      this.title = val;
    })
   }

  ngOnInit(): void {
  }

  public title:string = "Service";

  public data:{name:string, age:number}[] = [
    {name: 'hammad', age: 24},
    {name: 'ali', age: 22},
    {name: 'hassan', age: 20},
  ];

  public child:string = "Card subtitle";

  changeData(myService) {

    // this.title = myService.value;
    this.apiService.nameChange.next(myService.value)
  }

  getData(val) {
    this.child = val;
  }
}
