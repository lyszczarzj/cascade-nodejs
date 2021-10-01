import Linkable from "./Linkable.js";
import RequestService from "../RequestService.js";
import * as Struct from "../struct.js";

export default class Page extends Linkable {
    constructor(service: RequestService, identifier: Struct.Identifier) {
        super(service, identifier);
    }
}