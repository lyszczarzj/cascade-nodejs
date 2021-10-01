import { BarControllerDatasetOptions } from "chart.js";
import Identifier from "./properties/Identifier";
import * as Struct from "./struct";
import fetch from 'node-fetch';
import * as c from "./constants.js";
import Auth from "./auth.js";
import Asset from "./assets/asset.js"

export default class RequestService {
    #types: Array<string>;
    #properties: Array<string> = [
        c.TYPES.ASSETFACTORY,
        c.TYPES.ASSETFACTORYCONTAINER,
        c.TYPES.CLOUDTRANSPORT,
        c.TYPES.CONNECTORCONTAINER,
        c.TYPES.CONTENTTYPE,
        c.TYPES.CONTENTTYPECONTAINER,
        c.TYPES.DATADEFINITION,
        c.TYPES.DATADEFINITIONCONTAINER,
        c.TYPES.DESTINATION,
        c.TYPES.FACEBOOKCONNECTOR,
        c.TYPES.FEEDBLOCK,
        c.TYPES.FILE,
        c.TYPES.FOLDER,
        c.TYPES.GOOGLEANALYTICSCONNECTOR,
        c.TYPES.GROUP,
        c.TYPES.INDEXBLOCK,
        c.TYPES.MESSAGE,
        c.TYPES.METADATASET,
        c.TYPES.METADATASETCONTAINER,
        c.TYPES.PAGE,
        c.TYPES.PAGECONFIGURATION,
        c.TYPES.PAGECONFIGURATIONSET,
        c.TYPES.PAGECONFIGURATIONSETCONTAINER,
        c.TYPES.PAGEREGION,
        c.TYPES.PUBLISHSET,
        c.TYPES.PUBLISHSETCONTAINER,
        c.TYPES.REFERENCE,
        c.TYPES.ROLE,
        c.TYPES.SCRIPTFORMAT,
        c.TYPES.SHAREDFIELD,        
        c.TYPES.SITE,
        c.TYPES.SITEDESTINATIONCONTAINER,
        c.TYPES.SYMLINK,
        c.TYPES.TARGET,
        c.TYPES.TEMPLATE,
        c.TYPES.TEXTBLOCK,
        c.TYPES.TRANSPORTDB,
        c.TYPES.TRANSPORTFS,
        c.TYPES.TRANSPORTFTP,
        c.TYPES.TRANSPORTCONTAINER,
        c.TYPES.USER,
        c.TYPES.WORDPRESSCONNECTOR,
        c.TYPES.WORKFLOW,
        c.TYPES.WORKFLOWDEFINITION,
        c.TYPES.WORKFLOWDEFINITIONCONTAINER,
        c.TYPES.XHTMLDATADEFINITIONBLOCK,
        c.TYPES.XMLBLOCK,
        c.TYPES.XSLTFORMAT
    ];
    #url: string;
    #auth: any;
    #message: string;
    #success: string;
    #reply: any;
    #audits: string;
    #commands: Array<string>;

    constructor(type: string, url: string, auth: Auth, context: any = null) {
        this.#url = url;
        this.#auth = auth;
        this.#message = "";
        this.#success = "";
        this.#reply = "";
        this.#commands = [];
    }

    async apiOperation(command: string, params: any = null): Promise<any> {
        var options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${this.#auth.getToken()}`
            },
            body: JSON.stringify(params)
        };
        console.log(command)
        console.log(options)
        console.log(params)
        var response = await fetch(command, options)
        var json = await response.json()
        return json;
    }

    async retrieve(id: Struct.Identifier, ) {
        var property = c.propertyTypeMap[id.type];
        var asset = await this.read(id);

        if (typeof this.#reply.asset != undefined) {
            console.log(this.#reply.asset)
            return this.#reply.asset.property;
        }
        return null;
    }

    async read(id: Struct.Identifier): Promise<any> {
       // let idString = this.createIdString(id)
        let command = this.#url + 'read';

        let formatId = {
            "identifier": id
        }

        this.#reply = await this.apiOperation(command, formatId);
        this.#success = this.#reply.success;

        return this.#reply.asset ?? null;
    }

    isHexString(string: string): boolean {
        let pattern = /[0-9a-f]{32}/g;
        let matches = [...string.matchAll(pattern)];

        if (typeof matches[0] == string) {
            return true;
        }
        return false;
    }

    createId(type: string, idPath: string, siteName: string = null): Struct.Identifier {
        let id: Struct.Identifier = {
            type: type
        }
        //need to handle certain types seperately - branch code here as implement later
        if (this.isHexString(idPath)) {
            id['id'] = idPath; 
        } else {
            id['path'] = {
                path: idPath,
            }
            if (idPath == "/") {
                id.path.path = "%252F";
            }
            id.path.siteName = siteName;
        }

        id.type = type;
        return id;
    }

    createIdString(id: Struct.Identifier): string {
        if (typeof id.id != undefined) {
            var idString = id.type + '/' + id.id;
        } else if (typeof id.path.path != undefined) {
            var path = id.path.path;

            if (path != "%252F") {
                path = path.replace(" ", "%20");
            }

            if (id.type == "role" ||
                id.type == "site" ||
                id.type == "group" ||
                id.type == "user"
            ) {
                idString = id.type + '/' + path;
            }
            else {
                idString = id.type + '/' + id.path.siteName + '/' + path
            }

        } else {
            idString = "";
            idString = idString.replace("//", "/");

            return idString;
        }
    }


}