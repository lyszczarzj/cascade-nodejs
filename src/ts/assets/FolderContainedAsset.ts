import ContainedAsset from "./ContainedAsset.js";
import RequestService from "../RequestService.js";
import * as Struct from "../struct.js";

export default class FolderContainedAsset extends ContainedAsset {
    constructor(service: RequestService, identifier: Struct.Identifier) {
        super(service, identifier);


    }
    //tag properties go here
}