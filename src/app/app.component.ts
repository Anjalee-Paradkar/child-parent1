import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child-parent';

  currentItem=1;

  //items = ['item1', 'item2', 'item3', 'item4'];
  items=['',];

  addItem(newItem:string){
    this.items.push(newItem);
  }

  onclick(){
    this.currentItem = Math.floor(Math.random()*10)
  }

  userDetails=[
    {name: "Anil", email:"anil@user.com"},
    {name: "Sunil", email:"sunil@user.com"},
    {name: "John", email:"John@user.com"},
    {name: "Ram", email:"Ram@user.com"},
  ]

}
