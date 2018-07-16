import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
model:any={};
  constructor() { }

  ngOnInit() {
  }
submit(form:NgForm){
console.log(this.model);
console.log(form);
  }
}
