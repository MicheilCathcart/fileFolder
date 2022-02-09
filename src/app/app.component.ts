import { Component } from '@angular/core';
import { NodeModel, NodeType } from './models/node.model';
import { getCircularReplacer } from './shared/get-circular-replacer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showFolderInput: boolean = false;

  rootNode: NodeModel = new NodeModel(NodeType.Unset);

  get nodesTOJSON() {

    // Stringify to remove parent circular reference
    let stringified = JSON.stringify(this.rootNode, getCircularReplacer());
    let parsed = JSON.parse(stringified);
    return parsed;
  }

  get nodeType() {
    return NodeType;
  }
  
}




