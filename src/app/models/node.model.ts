import { createGuid } from "../shared/create-guid";

export enum NodeType {
    Folder = 'folder',
    File = 'file',
    Unset = 'unset'
}

export class NodeModel {

    constructor(type: NodeType) {
      this.type = type;
    }

    id: string = createGuid();
    type!: NodeType | null;
    name?: string;
    children: NodeModel[] = [];
    parent?: NodeModel;

    addNode(node: NodeModel) {
      this.children.push(node);
    }

    removeNode(id: string) {
      let childIndex = this.children.findIndex(child => child.id === id);

      if (childIndex > -1) {
        let deletedChild: NodeModel[] = this.children.splice(childIndex, 1);

        // Remove children
        deletedChild[0].removeChildren();
      }
    }

    removeChildren() {
      this.children = [];
    }

}