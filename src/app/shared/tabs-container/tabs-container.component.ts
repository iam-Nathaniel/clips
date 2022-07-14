import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { ActivationEnd } from '@angular/router';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})



export class TabsContainerComponent implements AfterContentInit {

//with the querylist we want to find out the number of tabs within the container....passed as an object/array
//@contentChildren targets only projected content. requires an argumemt of an element or component

//find out the number of tabs in the tab component which is a projected content 
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList(); //create an instance of the object array
  e: any;

  constructor() { }
  
 ngAfterContentInit(): void {
   /* check for an active tab,
    user will pick the active tab,
    therefore verify there's at least one active tab
    prevent multiple tabs from being active
   */

   //the activeTabs will go throught he query list and create
   //a new list of tabs that are active
   const activeTabs = this.tabs?.filter(
     (tab) => tab.active //active is originally defined as false in tabs component

     //pass the tab to the filter function and set it to false
     // that is no tab will be activee
   );

   //if there's no active tab or the list of activetabs is empty
   //new list from filter function
   //then the selected tab becomes the first item in the list of filtered tabs

   if (!activeTabs || activeTabs.length === 0) {
     this.selectTab(this.tabs!.first, this.e);
   }
 }

 //receive the tabcomponent as the parameter
 //for each tab in the array initially set to false 
 //then set the selected tab to true

 selectTab(tab: TabComponent, e: Event){
   this.tabs?.forEach((tab) => {
     tab.active = false;
   });
   tab.active = true;

   //prevents the links from opening on a different page
   e.preventDefault();
 }

}
