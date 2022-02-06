import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FolderModel } from 'src/app/models/folder.model';
import { NodeType } from 'src/app/models/node.model';
import { NodesService } from 'src/app/services/nodes.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Output() 
  cancel = new EventEmitter<boolean>();

  @Input()
  type!: NodeType;

  name: string = '';

  constructor(private nodesService: NodesService) { }

  addNode() {
    let folder = new FolderModel();
    folder.name = this.name;
    console.log(this.name);
    this.nodesService.addNode(folder);
    this.onCancel();
  }

  onCancel() {
    this.cancel.emit(false);
  }

}
