import { NodeModel, NodeType } from "./node.model";

export class FolderModel extends NodeModel {
    override type = NodeType.Folder;
}