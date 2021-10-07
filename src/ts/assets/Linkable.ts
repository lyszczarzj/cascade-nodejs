
import DublinAwareAsset from "./DublinAwareAsset.js";
import RequestService from "../RequestService.js";
import * as Struct from "../struct.js";

export default class Linkable extends DublinAwareAsset {
    constructor(service: RequestService, identifier: Struct.Identifier) {
        super(service, identifier);
    }
}