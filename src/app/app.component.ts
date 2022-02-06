import { Component } from '@angular/core';
import { NodesService } from './services/nodes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'fileFolder';

  constructor(private nodesService: NodesService) {
    
  }

  get nodes() {
    return this.nodesService.nodes;
  }

  addRootFolder() {
    this.nodesService.addRootFolder();
  }

}
