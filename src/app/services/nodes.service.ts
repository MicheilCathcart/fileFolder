import { Injectable } from '@angular/core';
import { FolderModel } from '../models/folder.model';
import { NodeModel } from '../models/node.model';

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  nodes: NodeModel[] = [];

  constructor() { }

  /**
   * Create a new folder at the root level
   */
   addRootFolder() {
    this.nodes.push(new FolderModel());
  }

}
