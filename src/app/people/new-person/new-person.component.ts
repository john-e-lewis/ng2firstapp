import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {

  @Output() newPersonSubmitted:EventEmitter<any> = new EventEmitter();
  @Output() newPersonCancelled:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(newPerson){
    this.newPersonSubmitted.emit(newPerson);
  }

   onCancel(newPerson){
    this.newPersonCancelled.emit(newPerson);
  }

}
