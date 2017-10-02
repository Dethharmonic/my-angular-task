import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  InputTextModule, ButtonModule, DataTableModule, DialogModule,ContextMenuModule,
  TabViewModule, PanelModule, MenuModule, MenuItem, ConfirmDialogModule, ConfirmationService,  GrowlModule
} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { PopupMenuComponent } from './popup-menu/popup-menu.component';
import { LogoutMenuComponent } from './logout-menu/logout-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    PopupMenuComponent,
    LogoutMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTableModule,
    HttpModule,
    InputTextModule,
    DialogModule,
    TabViewModule,
    PanelModule,
    MenuModule,
    GrowlModule,
    ContextMenuModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
