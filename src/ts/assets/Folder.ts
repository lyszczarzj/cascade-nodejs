// import RequestService from "../RequestService";
// import Container from "./Container";
// import * as Struct from "../struct.js"
// import Metadata from "../properties/Metadata";
// import Child from "../properties/Child";

import {Container, Metadata, RequestService, Struct} from '../internal.js'

export default class Folder extends Container {
    #includeInStaleContent: boolean 
    #metadata: Metadata
    #workflowSettings: any;

    constructor(service: RequestService, identifier: Struct.Identifier) {
        super(service,identifier)

        this.processMetadata();

        if (typeof this.getProperty().includeInStaleContent != undefined) {
            this.#includeInStaleContent = this.getProperty().includeInStaleContent;
        } else {
            this.#includeInStaleContent = false;
        }
    }

    private processMetadata() {
        this.#metadata = new Metadata(this.getProperty().metadata, this.getService(), this.getProperty().metadataSetId, this)
    }

    
}