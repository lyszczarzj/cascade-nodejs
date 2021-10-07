import Property from "./Property.js";
import * as struct from "../struct.js";
import RequestService from "../RequestService.js";

export default class Path extends Property {
    #path: string;
    #siteId: string;
    #siteName: string;
    constructor(json: struct.path, service: RequestService = null, data1: any = null, data2: any = null, data3: any = null) {
        super(json, service, data1, data2, data3)
        if (typeof json != undefined) {
            this.#path = json.path;

            if (typeof json.siteId != undefined) {
                this.#siteId = json.siteId;
            }
            if (typeof json.siteName != undefined) {
                this.#siteName = json.siteName;
            }
        } 
    }
    getPath() {
        return this.#path;
    }
    getSiteId() {
        return this.#siteId;
    }
    getSiteName() {
        return this.#siteName;
    }
    toObject() {
        return {
            path: this.#path,
            siteId: this.#siteId,
            siteName: this.#siteName
        }
    }

}