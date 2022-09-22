import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { IssueListComponent } from './issue-list/issue-list.component';

@NgModule({
  declarations: [AppComponent, IssueListComponent],
  imports: [BrowserModule, ClarityModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
