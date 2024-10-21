import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy,OnChanges {
  @Input() userName: any
  @Output() test: EventEmitter<User> = new EventEmitter()

  constructor() {
    console.log('constructor')
  }
  ngOnChanges(changes: SimpleChanges)
  {
    console.log('ngOnChanges',changes)
  }
  ngOnInit() {
    console.log('ngOnInit')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

 


  dataSend() {
    // this.test.emit("Send from child")
    this.test.emit({ name: 'Sumair', status: true })
  }
}
