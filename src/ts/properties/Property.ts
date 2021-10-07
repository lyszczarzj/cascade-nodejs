import RequestService from "../RequestService.js";
import * as Struct from "../struct.js";

export default abstract class Property {
    constructor(json: any, service: RequestService = null, data1: any = null, data2: any = null, data3: any = null) {

    }

    abstract toObject(): any
}