import Property from "./Property.js";
import Path from "./Path.js"
import * as Struct from "../struct.js";
import RequestService from "../RequestService.js";
import Asset from "../assets/Asset.js";
import Factory from "../assets/Factory.js";

export default class Child extends Property {
    #id: string
    #path: Path
    #type: string
    #recycled: boolean
    constructor(json: Struct.Child, service: RequestService = null, data1: any = null, data2: any = null, data3: any = null) {
        super(json, service, data1, data2, data3)
        if (typeof json != undefined) {
            if (typeof json.id != undefined) {
                this.#id = json.id;
            }
            if (typeof json.path != undefined) {
                this.#path = new Path(json.path);
            }
            if (typeof json.recycled != undefined) {
                this.#recycled = json.recycled;
            } else {
                this.#recycled = false;
            }
        } else {
            throw new Error('Null Identifier');
        }
    }

    display(): Child {
        console.log(`Type: ${this.#type}
        Path: ${this.#path.getPath()}
        ID: ${this.#id}`)
        return this;
    }
  
    getAsset(service: RequestService): Asset {
        if (typeof service == null) {
            throw new Error('No Service');
        }

        if (typeof this.#id != undefined) {
            return Factory.getAsset(service, this.#type, this.#id);
        } else {
            return Factory.getAsset(service, this.#type, this.#path.getPath(), this.#path.getSiteName());
        }
    }

    getId() {
        return this.#id;
    }

    getPath() {
        return this.#path;
    }

    getPathPath() {
        if (typeof this.#path != undefined) {
            return this.#path.getPath();
        }
        return null;
    }

    getPathSiteId() {
        if (typeof this.#path != undefined) {
            return this.#path.getSiteId();
        }
        return null;
    }

    getPathSiteName() {
        if (typeof this.#path != undefined) {
            return this.#path.getSiteName();
        }
        return null;
    }
    getRecycled() {
        return this.#recycled;
    }
    getType() {
        return this.#type;
    }
    //toLiString()
    toObject() { 
        var obj: Struct.Child
        if (typeof this.#id != undefined) {
            obj.id = this.#id;
        }
        if (typeof this.#path != undefined) {
            obj.path = this.#path.toObject();
        }
        obj.type = this.#type;
        obj.recycled = this.#recycled;
    }

}