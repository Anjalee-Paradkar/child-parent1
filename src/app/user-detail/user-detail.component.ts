import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  @Input() data: {name:string, email:any } = {name:'',email:''};

  onclick(){
    console.log(this.data)
  }


}
