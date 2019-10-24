import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { UserListComponent } from './components/user/user-list/user-list.component';
import { JobListComponent } from './components/job/job-list/job-list.component';
import { UserAddUpdateComponent } from './components/user/user-add-update/user-add-update.component';
import { JobAddUpdateComponent } from './components/job/job-add-update/job-add-update.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { UserViewComponent } from './components/user/user-view/user-view.component';
import { JobViewComponent } from './components/job/job-view/job-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    JobListComponent,
    UserAddUpdateComponent,
    JobAddUpdateComponent,
    ConfirmDialogComponent,
    UserViewComponent,
    JobViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  entryComponents: [
    UserAddUpdateComponent,
    JobAddUpdateComponent,
    ConfirmDialogComponent,
    UserViewComponent,
    JobViewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
