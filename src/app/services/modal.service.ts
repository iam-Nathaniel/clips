import { Injectable } from '@angular/core';

interface IModal{
  id: string, //helps service identify the modal
  visible: boolean //help hide or show a modal
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  //Example of Model in MVC model

  //type annotation using interface
  private modals: IModal[] = [];

  constructor() {}

   register(id: string) {
    //pass id as argument to register function
    this.modals.push({
      id, //push id and boolean to modals array
      visible: false,  
    });
  }

  unregister(id: string){
    this.modals = this.modals.filter(
      element => element.id !==id
    )
  }

  /*
    this method returns type boolean
    return a boolean value when you find an element in the array whose id matches
    the id passed to the method. if true return the visible property
    Boolean(this.modals.find(element => element.id === id)?.visible);
 */

  isModalOpen(id: string) : boolean {
    return !!this.modals.find(element => element.id === id)?.visible;
  }

  toggleModal(id: string) {
    //we need to find which modal to toggle
    const modal = this.modals.find(element => element.id === id);
   if(modal){
    modal.visible = !modal.visible
   }
    // this.visible = !this.visible;
  }
}
  