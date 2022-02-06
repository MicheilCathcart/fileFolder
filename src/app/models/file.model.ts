import { NodeModel, NodeType } from "./node.model";

export class FileModel extends NodeModel {
    override type = NodeType.File;
}