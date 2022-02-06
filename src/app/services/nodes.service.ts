import { Injectable } from '@angular/core';
import { NodeModel } from '../models/node.model';

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  nodes: NodeModel[] = [];

  constructor() { }

  /**
   * Remove a node and all its children
   * @param node the node to remove 
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
   * Add a node under it's parent
   * @param node the node to add, 
   */
   addNode<T extends NodeModel>(node: T) {

    let children = node.parent?.children || this.nodes; 

    if (parent) {
      children.push(node);
    }

  }

}
