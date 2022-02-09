import { Component, Input } from '@angular/core';
import { NodeModel } from 'src/app/models/node.model';

@Component({
  selector: 'app-folder-view',
  templateUrl: './folder-view.component.html',
  styleUrls: ['./folder-view.component.scss']
})
export class FolderViewComponent {

  @Input()
  folder!: NodeModel;

  showInputSelector: boolean = false;

  delete() {
    this.folder.parent?.removeNode(this.folder.id);
  }

}
