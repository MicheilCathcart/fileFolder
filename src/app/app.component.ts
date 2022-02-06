import { Component } from '@angular/core';
import { NodeType } from './models/node.model';
import { NodesService } from './services/nodes.service';
import { getCircularReplacer } from './shared/get-circular-replacer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showFolderInput: boolean = false;

  constructor(private nodesService: NodesService) {
  }

  get nodes() {
    return this.nodesService.nodes;
  }

  get nodesTOJSON() {

    // Stringify to remove parent circular reference
    let stringified = JSON.stringify(this.nodesService.nodes, getCircularReplacer());
    let parsed = JSON.parse(stringified);
    return parsed;
  }

  get nodeType() {
    return NodeType;
  }
  
}




