import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeModel, NodeType } from 'src/app/models/node.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input()
  type!: NodeType;

  @Input()
  node!: NodeModel;

  @Output() 
  cancel = new EventEmitter<boolean>();

  name: string = '';

  get nodeType() {
    return NodeType;
  }

  addNode() {

    // Do not create items with no name
    if (this.name === '' || !this.name) {
      this.onCancel();
      return;
    }

    let node = new NodeModel(this.type);
    node.name = this.name;
    node.parent = this.node;
    this.node.addNode(node);

    this.name = '';

    this.onCancel();
  }

  onCancel() {
    this.cancel.emit(false);
  }

}
