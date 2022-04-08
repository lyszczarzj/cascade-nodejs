//import "./asset.js";
// import RequestService from "../RequestService.js";
// import Asset from "./asset.js";
// import ContentType from "./ContentType.js";
// import Folder from "./Folder.js"
// import * as c from "../constants.js"
// import FolderContainedAsset from "./FolderContainedAsset.js";
// import AssetTemplate from "./AssetTemplate.js";

import {RequestService, Asset, Folder, ContentType, AssetTemplate, c} from "../internal.js"

export default class Cascade {
    #service: RequestService

    constructor(service:RequestService) {
        try {
            this.#service = service;
        }
        catch (e) {
            console.log(e);
        }
    }

    getAsset(type:string, id_path: string, siteName: string = null): Asset {
        try {
            return Asset.getAsset(this.#service, type, id_path, siteName);
        }
        catch(e) {
            throw e;
        }
    }
  
    private createAsset(obj: any, type: string, id_path: string, site_name: string =""  ) {
        try{
            // if (type == c.TYPES.ROLE) {
            //     return this.getRoleByName(id_path);
            // }
            return this.getAsset(type,id_path,site_name);
        }
        catch (e) {
            this.#service.create(obj);

            if (!this.#service.isSuccessful()) {
                throw new Error(this.#service.getMessage());
            }
        }

        return this.getAsset(type, id_path, site_name)
    }

    createDataDefinitionPage(parent: Folder, name:string, ct:ContentType): Asset {
        if (name.trim() == "") {
            throw new Error('Empty Page Name')
        }

        let asset = AssetTemplate.getDataDefinitionPage();

        asset.page.name = name;
        asset.page.parentFolderPath = parent.getPath()
        asset.page.siteName = parent.getSiteName()
        asset.page.contentTypeId = ct.getId();
        asset.page.structuredData = ct.getDataDefinition().getStructuredData();

        return this.createAsset(asset, c.TYPES.PAGE, this.getPath(parent, name), parent.getSiteName());

    }
    createXhtmlPage(parent: Folder, name:string, xhtml:string = "", ct:ContentType): Asset {
        if (name.trim() == "") {
            throw new Error('Empty Page Name')
        }

        let asset = AssetTemplate.getXhtmlPage();

        asset.page.name = name;
        asset.page.parentFolderPath = parent.getPath()
        asset.page.siteName = parent.getSiteName()
        asset.page.contentTypeId = ct.getId();

        return this.createAsset(asset, c.TYPES.PAGE, this.getPath(parent, name), parent.getSiteName());
    }
    

    // Page Methods
    createPage(parent: any, name: string, ct: ContentType, xhtml: string = "") {
        if (ct.getDataDefinition() != null) {
            return this.createDataDefinitionPage(parent, name, ct);
        } else {
            return this.createXhtmlPage(parent, name, xhtml, ct);
        }
    }

    getPage(id_path: string, siteName: string) {
        return this.getAsset(c.TYPES.PAGE, id_path, siteName)
    }

    private getPath(parent: Asset = null, name: string = "") {
        let path = ""
        if (parent == null || parent.getPath() == "") {
            path = name
        } else {
            path = parent.getPath() + '/' + name
        }
        return path;
    }



}