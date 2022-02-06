import { Component, Input, OnInit } from '@angular/core';
import { NodeModel } from 'src/app/models/node.model';
import { NodesService } from 'src/app/services/nodes.service';

@Component({
  selector: 'app-folder-view',
  templateUrl: './folder-view.component.html',
  styleUrls: ['./folder-view.component.scss']
})
export class FolderViewComponent implements OnInit {

  @Input()
  folder!: NodeModel;

  constructor(private nodeService: NodesService) { }

  ngOnInit(): void {
  }

  addChild() {
  }

  delete() {
    this.nodeService.removeNode(this.folder);
  }

}
