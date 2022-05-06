import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkspaceComponent } from './workspace/workspace.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, WorkspaceComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
