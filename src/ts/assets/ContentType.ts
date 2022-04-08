// import ContainedAsset from "./ContainedAsset.js"
// import * as Struct from "../struct.js";
// import RequestService from "../RequestService.js";
// import DataDefinition from "./DataDefinition.js";
// import * as c from "../constants.js"

import {ContainedAsset, Struct, RequestService, DataDefinition, c} from '../internal.js'

export default class ContentType extends ContainedAsset {
    #contentTypePageConfigurations: any
    #contentTypePageConfigurationNames: any
    #inlineEditableFields: any
    #inlineEditableFieldMap: any
    #inlineEditableFieldNames: any
    
    #dataDefinition: DataDefinition
    #metadataSet: any
    #conigurationSet: any
    #wiredFieldTypes: any
    
        constructor(service: RequestService, identifier: Struct.Identifier) {
            super(service, identifier)
    
            if (typeof this.getProperty().dataDefinitionId !== undefined) {
                this.#dataDefinition = new DataDefinition (service, service.createId(c.TYPES.DATADEFINITION, this.getProperty().dataDefinitionId))
            }
    
    
        }

        getDataDefinition() {
            if (typeof this.#dataDefinition !== undefined) {
                return this.#dataDefinition
            }
            return null;
        }
    }