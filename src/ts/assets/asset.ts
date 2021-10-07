import * as chalk from "chalk";
import * as Struct from "../struct.js";
import RequestService from "../RequestService.js";
import * as c from "../constants.js";
import ucwords from "../ucwords.js";
import Page from "./Page.js";
import Factory from "./Factory.js";



export default abstract class Asset {
    #id: string;
    #path: string;
    #siteName: string;
    #siteId: string;
    #service: RequestService;
    #identifier: Struct.Identifier;
    #type: string;
    #propertyName: string;
    #property: any;
    #name: string;
    #json: string;


    constructor(service: RequestService, identifier: Struct.Identifier) {
        if (service == null) {
            throw new Error('Service is null')
        }

        if (identifier == null) {
            throw new Error('Identifier is null')
        }

        service.retrieve(identifier).then((property) => {
            if (typeof property !== 'undefined') {
                if (typeof identifier.id !== 'undefined') {
                    var id = identifier.id;
                }

                if (typeof identifier.path !== 'undefined') {
                    var path = identifier.path.path;
                    if (identifier.path.siteName !== 'undefined') {
                        var siteName = identifier.path.siteName;
                    }
                }
                if (typeof identifier.path == 'undefined' && typeof identifier.path !== 'undefined') {
                    var id = path;
                }
                else {
                    id = ""
                }
            }
            //storage
            this.#service = service;
            this.#identifier = identifier;
            this.#type = identifier.type;
            this.#propertyName = "";
            this.#property = property;
            let object: any = {};
            object[this.#type]
            object[this.#type] = this.#property
            this.#json = JSON.stringify(object);
        })
    }

    display(): Asset {
        let id = this.getId();
        let name = this.getName();

        console.log(`Id: ${id}
        Name: ${name}
        Path: ${this.#path}
        Site ID: ${this.#siteId}
        Site Name: ${this.#siteName}
        Property Name: ${this.#propertyName}
        Type: ${this.#type}
        `)

        return this
    }

    edit(): Promise<Asset> {
        return this.reloadProperty()
    }

    getId(): string {
        return this.#id;
    }

    getIdentifier(): Struct.Identifier {
        return this.#identifier;
    }

    getJson(): string {
        return this.#json;
    }

    getName(): string {
        return this.#name;
    }

    getPath(): string {
        return this.#path;
    }

    getProperty(): any {
        return this.#property;
    }

    getPropertyName(): any {
        return this.#propertyName;
    }

    getService(): RequestService {
        return this.#service;
    }

    getType(): string {
        return this.#type;
    }

    async reloadProperty(): Promise<Asset> {
        if (typeof this.#identifier.path.path == undefined) {
            this.#identifier.path = { path: "" }
        }

        this.#property = await this.#service.retrieve(this.#identifier)
        return this
    }

    update(params: Map<string, string>) {
        Asset.staticUpdateData(this, params);
        return this;
    }

    updateData(params: Map<string, string>) {
        Asset.staticUpdateData(this, params)
        return this;
    }

    static getAsset(service: RequestService, type: string, idPath: string, siteName: string = null): Asset {
        return Factory.getAsset(service, type, idPath, siteName)
    }

    static staticUpdateData(a: Asset, params: Map<string, string>): Asset {
        //figure out what to do with this later
        return a;
    }






    //this.#json = JSON.stringify(["type": this.#property])
}