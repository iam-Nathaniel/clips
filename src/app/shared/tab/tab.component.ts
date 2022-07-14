import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  //receive the tabTitle from the parent component - tab-container
  @Input() tabTitle = '';

  //setting the active tab
  @Input() active = false;

  constructor() { }

  ngOnInit(): void {
    
  }

}
