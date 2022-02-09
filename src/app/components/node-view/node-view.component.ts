import { Component, Input } from '@angular/core';
import { NodeModel, NodeType } from 'src/app/models/node.model';

@Component({
  selector: 'app-node-view',
  templateUrl: './node-view.component.html',
  styleUrls: ['./node-view.component.scss']
})
export class NodeViewComponent {

  @Input()
  node!: NodeModel;

  get nodeType() {
    return NodeType;
  }

  showInputSelector: boolean = false;

  delete() {
    this.node.parent?.removeNode(this.node.id);
  }

}
