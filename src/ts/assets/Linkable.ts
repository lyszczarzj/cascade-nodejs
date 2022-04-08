
// import DublinAwareAsset from "./DublinAwareAsset.js";
// import RequestService from "../RequestService.js";
// import * as Struct from "../struct.js";
// import * as c from "../constants.js";
// import Metadata from "../properties/Metadata.js";
// import Property from "../properties/Property.js";
// import MetadataSet from "./MetadataSet.js";
// import Page from "./Page.js";
// import Asset from "./Asset.js";

import {DublinAwareAsset, Metadata, c, Property, Asset, MetadataSet, Page, RequestService, Struct} from '../internal.js'

export default class Linkable extends DublinAwareAsset {
    #metadata: Metadata;
    #page_content_type: any;
    // constructor(service: RequestService, identifier: Struct.Identifier) {
    //     super(service, identifier);

    //     if(this.getType() == c.TYPES.FILE || this.getType() == c.TYPES.SYMLINK) {
    //         this.processMetadata();
    //     }

    // }

    getCreatedBy(): string {
        return this.getProperty().createdBy;
    }

    getCreatedDate(): string {
        return this.getProperty().createdDate
    }
    getDynamicField(name: string): Property {
        return this.#metadata.getDynamicField(name);
    }
    getDynamicFields() {
        return this.#metadata.getDynamicFields();
    }
    getExpirationFolderId() {
        if (typeof this.getProperty().expirationFolderId != undefined) {
            return this.getProperty().expirationFolderId;
        }
        return null
    }
    getExpirationFolderPath() {
        if (typeof this.getProperty().expirationFolderPath != undefined) {
            return this.getProperty().expirationFolderPath;
        }
        return null
    }
    getExpirationFolderRecycled() : boolean
    {
        return this.getProperty().expirationFolderRecycled;
    }
    getLastModifiedBy(): string {
        return this.getProperty().lastModifiedBy;
    }
    getLastModifiedDate(): string {
        return this.getProperty().lastModifiedDate;
    }
    getMetadata(): Property {
        return this.#metadata
    }
    getMetadataObject() {
        return this.#metadata.toObject()
    }
    hasDynamicField(name: string): boolean {
        return this.#metadata.hasDynamicField(name);
    }
    setExpirationFolder() {
        return;
    }
    setMetadata(m: Metadata): Asset {
        this.#metadata = m;
        this.edit();
        this.processMetadata();
        return this;
    }
    setMetadataSet(m: MetadataSet): Asset {
        if (m == null) {
            throw new Error('Null Asset') 
        }

        if (this.getType() == c.TYPES.PAGE) {
            throw new Error('Wrong Asset Type')
        }

        this.getProperty().metadataSetId = m.getId();
        this.getProperty().metadataSetPath = m.getPath();
        this.edit();
        this.processMetadata();

        return this;
    }
    setPageContentType() {

    }
    private processMetadata() {
        let metadataSetId = ""
        if (this instanceof Page && typeof this.#page_content_type != undefined) {
            metadataSetId = this.#page_content_type.getMetadataSetId();
        } else {
            metadataSetId = this.getProperty().metadataSetId;
        }

        this.#metadata = new Metadata(this.getProperty().metadata, this.getService(), metadataSetId, this);

    }    
   
}