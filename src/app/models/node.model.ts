import { createGuid } from "../shared/create-guid";

export enum NodeType {
    Folder = 'folder',
    File = 'file',
    Unset = 'unset'
}

export class NodeModel {
    type!: NodeType | null;
    name?: string;
    children?: NodeModel[];
    id: string = createGuid();
}