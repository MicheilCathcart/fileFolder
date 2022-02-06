import { createGuid } from "../shared/create-guid";

export enum NodeType {
    Folder = 'folder',
    File = 'file',
    Unset = 'unset'
}

export class NodeModel {
    id: string = createGuid();
    type!: NodeType | null;
    name?: string;
    children: NodeModel[] = [];
    parent?: NodeModel;
}