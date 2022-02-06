import { Component } from '@angular/core';
import { NodeType } from './models/node.model';
import { NodesService } from './services/nodes.service';

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

  get nodeType() {
    return NodeType;
  }
  
}
