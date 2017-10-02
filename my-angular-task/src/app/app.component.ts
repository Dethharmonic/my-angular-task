import { Component, ViewEncapsulation } from '@angular/core';
import * as xlsx from 'xlsx';
import { WorkBook, WorkSheet } from 'xlsx';
import * as FileSaver from 'file-saver';
import { Obj } from './domain/obj';

// The main component of the application
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    //Array of elements of table on tab 1 
    datatable1:Obj[]=[];
    //Array of elements of table on tab 2 
    datatable2:Obj[]=[];
    //Number of the current open tab 
    tabSelectedNumber:number=0; 
    //Name of exported xlsx-file
    filename: string="ISP National APHT Report "+ this.getDate();

    constructor() { }

    //Returns current date (dd.mm.yyyy)
    getDate():string{
        var dt=new Date();
        let month:any = dt.getMonth()+1;
        if (month<10) month='0'+month;
        let day:any = dt.getDate();
        if (day<10) day='0'+day;
        let year:any = dt.getFullYear();
        return day+'.'+month+'.'+year;
    }
    //Sets number of current open tab
    setTabsNum(event){
        this. tabSelectedNumber=event.index;
    }
    //Export data from selected datatable
    tableToExcel() {
        if (this.tabSelectedNumber==0){
            this.exportAsExcelFile(this.datatable1, this.filename);
        }
        else if(this.tabSelectedNumber==1){
            this.exportAsExcelFile(this.datatable2, this.filename);
        }   
    }
    public exportAsExcelFile(json: any[], excelFileName: string): void {
        const worksheet: xlsx.WorkSheet = xlsx.utils.json_to_sheet(json);
        const workbook: xlsx.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    //Saving a file with a data table with the specified name
    private saveAsExcelFile(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer]);
        FileSaver.saveAs(data, fileName + '.xlsx' );
    }
    
    
    
}


