// import ContainedAsset from "./ContainedAsset.js";
// import RequestService from "../RequestService.js";
// import * as Struct from "../struct.js";

import {ContainedAsset, RequestService, Struct} from '../internal.js'

export default class DataDefinition extends ContainedAsset {
    #attributes:any      // all attributes of each field
    #identifiers: any    // all identifiers of fields
    #code: string
    #xml: any            // the definition xml
    #structuredData: any // the corresponding structured data
    #simpleXMLElement: any
    #sharedFields: any[]

    constructor(service: RequestService, identifier: Struct.Identifier) {
        super(service, identifier)

        this.#sharedFields = [];
        this.#code = this.getProperty().xml
        this.#attributes = [];
        this.#structuredData = {};
    }

    getStructuredData() {
        return this.#structuredData
    }
}