import { Component, ViewEncapsulation } from '@angular/core';

//The component responsible for the logout menu
@Component({
    selector: 'app-logout-menu',
    templateUrl: './logout-menu.component.html',
    styleUrls: ['./logout-menu.component.css'],
    providers: [],
    encapsulation: ViewEncapsulation.None
})
export class LogoutMenuComponent {
    displayDialog: boolean;
    userName:string;
    constructor() { }
    ngOnInit() {
        this.userName="Troy Giorgio";
    }
    // Asks conformation
    confirmation() {
        this.displayDialog = true;
    }
    // Hides dialog menu
    cancel() { 
        this.displayDialog = false;
    }
    // Closes current browser tab ***NOT WORKED***
    logout() {
        window.close();
        this.displayDialog = false;
    }   
}


