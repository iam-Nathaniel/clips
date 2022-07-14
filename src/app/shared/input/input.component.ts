import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  //create an instance of a  property called control with type as FormControl
  //pass data from the parent clas to this class via the Input decorator
  @Input() control: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
