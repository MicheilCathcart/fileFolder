import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import { InputSelectorComponent } from './components/input-selector/input-selector.component';
import { InputComponent } from './components/input/input.component';
import { NodeViewComponent } from './components/node-view/node-view.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    NodeViewComponent,
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
