import FolderContainedAsset from "./FolderContainedAsset.js";
import RequestService from "../RequestService.js";
import * as Struct from "../struct.js";


export default class DublinAwareAsset extends FolderContainedAsset {
    constructor(service: RequestService, identifier: Struct.Identifier) {
        super(service,identifier)
    }

    //more code
}