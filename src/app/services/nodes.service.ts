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
   * Removes a node and it's children when deleted
   * @param parent the nodes parent, 
   * @param childId 
   */
   removeNode(node: NodeModel) {

    let children = node.parent?.children || this.nodes;
    let childIndex = children.findIndex(child => child.id === node.id);

    if (childIndex > -1) {
      let deletedChild: NodeModel[] = children.splice(childIndex, 1);

      // Remove children
      deletedChild[0].children = [];
    }

  }

  /**
   * Removes a node and it's children when deleted
   * @param parent the nodes parent, 
   * @param childId 
   */
   addNode<T extends NodeModel>(node: T) {

    let children = node.parent?.children || this.nodes; 

    if (parent) {
      children.push(node);
    }

  }

}
