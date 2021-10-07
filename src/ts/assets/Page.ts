
import Linkable from "./Linkable.js";
import RequestService from "../RequestService.js";
import * as Struct from "../struct.js";
import * as c from "../constants.js";

export default class Page extends Linkable {
    static TYPE: string = c.TYPES.PAGE;
    /*#structuredData
    #pageConfigurations
    #pageConfigurationMap
    #dataDefinitionId
    #contentType
    #pageConfigurationSet
    #dataDefinition*/
    constructor(service: RequestService, identifier: Struct.Identifier) {
        super(service, identifier);
    }
}