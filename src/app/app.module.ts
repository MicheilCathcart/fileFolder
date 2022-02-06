import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FileViewComponent } from './components/file-view/file-view.component';
import { FolderViewComponent } from './components/folder-view/folder-view.component';
import { TreeComponent } from './components/tree/tree.component';
import { InputSelectorComponent } from './components/input-selector/input-selector.component';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    FileViewComponent,
    FolderViewComponent,
    InputSelectorComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
