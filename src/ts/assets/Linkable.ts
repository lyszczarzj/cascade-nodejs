
import DublinAwareAsset from "./DublinAwareAsset.js";
import RequestService from "../RequestService.js";
import * as Struct from "../struct.js";
import Metadata from "../properties/Metadata.js";

export default class Linkable extends DublinAwareAsset {
    #metadata: Metadata;
    #page_content_type: any;
    constructor(service: RequestService, identifier: Struct.Identifier) {
        super(service, identifier);
    }
}