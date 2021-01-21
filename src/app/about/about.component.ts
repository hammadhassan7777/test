import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private apiService:ApiService) {
    this.apiService.nameChange.subscribe(val => {
      this.title = val;
    })
   }

  ngOnInit(): void {
  }

  public title:string = "About"

  changeData(myAbout) {
    
    // this.title = myAbout.value;
    this.apiService.nameChange.next(myAbout.value)
  }

}
