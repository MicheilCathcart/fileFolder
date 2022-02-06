import { Component, Input, OnInit } from '@angular/core';
import { NodeModel } from 'src/app/models/node.model';
import { NodesService } from 'src/app/services/nodes.service';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.scss']
})
export class FileViewComponent implements OnInit {

  @Input()
  file!: NodeModel;

  constructor(private nodeService: NodesService) { }

  ngOnInit(): void {
  }

  delete() {
    this.nodeService.removeNode(this.file);
  }

}
