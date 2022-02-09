import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NodeModel, NodeType } from 'src/app/models/node.model';

@Component({
  selector: 'app-input-selector',
  templateUrl: './input-selector.component.html',
  styleUrls: ['./input-selector.component.scss']
})
export class InputSelectorComponent {

  @Input()
  node!: NodeModel;

  @Output() 
  close = new EventEmitter<boolean>();

  type!: NodeType;

  get nodeType() {
    return NodeType;
  }

  showFileInput() {
    this.type = this.nodeType.File;
  }

  showFolderInput() {
    this.type = this.nodeType.Folder;
  }

  onClose() {
    this.close.emit(false);
  }

}
