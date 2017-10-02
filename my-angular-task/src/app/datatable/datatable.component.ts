import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Obj } from '../domain/obj';
import { ObjService } from '../services/objservice';
import { MenuItem } from 'primeng/primeng';
import { PrimeObj } from '../domain/primeobj';

//The component responsible for the datatables
@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.css'],
    providers: [ObjService],
    encapsulation: ViewEncapsulation.None
})
export class DatatableComponent {
    //Array of table's elements
    @Input() objs: Obj[];
    //Array of Menu elements
    contextItems: MenuItem[];
    //Displaying flag for adding form
    displayAdding: boolean;
    //Displaying flag for updating form
    displayUpdating: boolean;
    //Auxiliary variable for operations with data elements
    obj: Obj = new PrimeObj();
    //variable storing the selected element
    selectedObj: Obj;
   

    


    constructor(private objService: ObjService) { }
    
    ngOnInit() {
        //Using the service generates 9 rows on initialization
        let count: number = 9;
        this.objService.getData(count, this.objs);
        //Calls the context menu assembly function
        this.fillContextMenu();
    }
    //Displays adding form
    showAddingDialog() {
        this.obj = new PrimeObj();
        this.displayAdding = true;
    }
    //Hides adding form
    hideAddingDialog() {
        this.displayAdding = false;
    }
    //Adds new element to table
    add() {
        let objs = [...this.objs];
        objs.push(this.obj);
        this.objs = objs;
        this.obj = null;
        this.displayAdding = false;
    }
    //Delete selected object from table
    delete() {
        let index = this.findSelectedObjIndex();
        this.objs = this.objs.filter((val, i) => i != index);
        this.obj = null;
    }
    //Displays updating form
    showUpdatingDialog() {
        this.obj = this.cloneObj(this.selectedObj);
        this.displayUpdating = true;
    }
    //Returns duplicate of object
    cloneObj(c: Obj): Obj {
        let obj = new PrimeObj();
        for (let prop in c) {
            obj[prop] = c[prop];
        }
        return obj;
    }
    //Hides updating form
    hideUpdatingDialog() {
        this.displayUpdating = false;
    }
    //Updates selected element
    update() {
        let objs = [...this.objs];
        objs[this.findSelectedObjIndex()] = this.obj;
        this.objs = objs;
        this.obj = null;
        this.hideUpdatingDialog();
    }
    //Returns number of the selected element
    findSelectedObjIndex(): number {
        return this.objs.indexOf(this.selectedObj);
    }

    //Assembles context menu 
    fillContextMenu() {
        this.contextItems = [
            {
                label: 'Modify row', command: (event) => {
                    this.showUpdatingDialog();
                }
            },
            {
                label: 'Delete row', command: (event) => {
                    this.delete();
                }
            }
        ];
    }

    //Conditionally highlightes row
    rowBgColor(obj: Obj) {
        let bgStyleClass: string;
        if (obj.current_tier > 10)
            bgStyleClass = 'red-highlighting';
        else if (obj.current_tier >= 8)
            bgStyleClass = 'green-highlighting';
        return bgStyleClass;
    }

    

}