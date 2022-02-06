import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeModel, NodeType } from 'src/app/models/node.model';

@Component({
  selector: 'app-input-selector',
  templateUrl: './input-selector.component.html',
  styleUrls: ['./input-selector.component.scss']
})
export class InputSelectorComponent implements OnInit {

  @Input()
  parent!: NodeModel;

  @Output() 
  close = new EventEmitter<boolean>();

  type!: NodeType;

  constructor() { }

  ngOnInit(): void {
  }

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
