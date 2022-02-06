import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileComponent } from './components/file/file.component';
import { FolderComponent } from './components/folder/folder.component';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
