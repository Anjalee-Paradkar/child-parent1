import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() item=0;

  @Output() newItemEvent=new EventEmitter<string>();

  addnewItem(value: string){
    this.newItemEvent.emit(value);
  }


}

