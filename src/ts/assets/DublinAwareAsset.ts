import FolderContainedAsset from "./FolderContainedAsset.js";
import RequestService from "../RequestService.js";
import * as Struct from "../struct.js";
import * as c from "../constants.js";
import Page from "./Page.js";


export default class DublinAwareAsset extends FolderContainedAsset {
   // #metadataSet: MetadataSet
    constructor(service: RequestService, identifier: Struct.Identifier) {
        super(service,identifier);
       /* if ( this.getType() != Page.TYPE ) {
            this.#metadataSet = new MetadataSet(service,service.createId(MetadataSet.TYPE,this.getProperty().metadataSetId));
        } */
    }

    //more code
}