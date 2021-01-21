import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public myStyle: object = {
    color: 'pink',
    backgroundColor: 'black'
  };
  public myCLass: object = {
    color: true,
    bgColor: false
  };
  public hide: boolean = true;
  

  public data:{name:string, age:number}[] = [
    {name: 'hammad', age: 24},
    {name: 'ali', age: 22},
    {name: 'hassan', age: 20},
  ];

  public title:string = "Angular";

  constructor(private apiService:ApiService) {
    this.apiService.nameChange.subscribe(val => {
      this.title = val;
    })
   }

  ngOnInit(): void {
  }

  changeDiv() {
    if (this.hide === true) {
      this.hide = false;
    } else {
      this.hide = true;
    }
  }

}
