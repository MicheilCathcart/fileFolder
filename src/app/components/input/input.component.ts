import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileModel } from 'src/app/models/file.model';
import { FolderModel } from 'src/app/models/folder.model';
import { NodeModel, NodeType } from 'src/app/models/node.model';
import { NodesService } from 'src/app/services/nodes.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input()
  type!: NodeType;

  @Input()
  parent!: NodeModel;

  @Output() 
  cancel = new EventEmitter<boolean>();

  name: string = '';

  constructor(private nodesService: NodesService) { }

  get nodeType() {
    return NodeType;
  }

  addNode() {

    // Do not create items with no name
    if (this.name === '' || !this.name) {
      this.onCancel();
      return;
    }

    if (this.type == NodeType.Folder) {
      let folder = new FolderModel();
      folder.name = this.name;
      folder.parent = this.parent;
      this.nodesService.addNode(folder);
    }

    if (this.type == NodeType.File) {
      let file = new FileModel();
      file.name = this.name;
      file.parent = this.parent;
      this.nodesService.addNode(file);
    }

    this.onCancel();
  }

  onCancel() {
    this.cancel.emit(false);
  }

}
