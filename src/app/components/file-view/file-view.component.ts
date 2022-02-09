import { Component, Input } from '@angular/core';
import { NodeModel } from 'src/app/models/node.model';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.scss']
})
export class FileViewComponent {

  @Input()
  file!: NodeModel;

  delete() {
    this.file.parent?.removeNode(this.file.id);
  }

}
