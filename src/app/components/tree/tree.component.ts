import { Component, Input } from '@angular/core';
import { FolderModel } from 'src/app/models/folder.model';
import { NodeModel } from 'src/app/models/node.model';
import { NodesService } from 'src/app/services/nodes.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

  @Input()
  nodes!: NodeModel[];

}
