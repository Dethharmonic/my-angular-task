import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Message } from 'primeng/components/common/message';

//The component responsible for the pop-up menu
@Component({
    selector: 'app-popup-menu',
    templateUrl: './popup-menu.component.html',
    styleUrls: ['./popup-menu.component.css'],
    providers: [],
    encapsulation: ViewEncapsulation.None
})

export class PopupMenuComponent {
    constructor() { }
    //Array of Menu elements
    items: MenuItem[];
    //Confirmation messages
    msgs: Message[] = [];
    ngOnInit() {
        //Calls the menu assembly function
        this.fillMenu();
    }
    //Assembles popup menu 
    fillMenu() {
        this.items = [
            {
                label: 'NBN ISP Report ', command: (event) => {
                    this.confirmMsg(event.item.label);
                }
            },
            {
                label: 'DSL ISP Report', command: (event) => {
                    this.confirmMsg(event.item.label);
                }
            },
            {
                label: 'Configuration', command: (event) => {
                    this.confirmMsg(event.item.label);
                }
            }
        ];
    }

    //displays a confirmation message 
    confirmMsg(str: string) {
        this.msgs = [{ severity: 'info', summary: 'Confirmation message', detail: str + ' has been activated.' }];
    }
}


