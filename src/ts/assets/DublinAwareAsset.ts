// import FolderContainedAsset from "./FolderContainedAsset.js";
// import RequestService from "../RequestService.js";
// import * as Struct from "../struct.js";
// import * as c from "../constants.js";
// import Page from "./Page.js";
// import MetadataSet from "./MetadataSet.js";
// import Asset from "./Asset.js";
// import Linkable from "./Linkable.js";

import {FolderContainedAsset, MetadataSet, Page, Asset, RequestService, Struct} from '../internal.js'

export default class DublinAwareAsset extends FolderContainedAsset {
    #metadataSet: MetadataSet
    constructor(service: RequestService, identifier: Struct.Identifier) {
        super(service,identifier);
        if ( this.getType() != Page.TYPE ) {
            this.#metadataSet = new MetadataSet(service,service.createId(MetadataSet.TYPE,this.getProperty().metadataSetId));
        } 
    }
    getMetadataSet(): Asset {
        return this.#metadataSet;
    }
    
    getMetadataSetId(): string {
        return this.#metadataSet.getId();
    }
    getMetadataSetPath(): string {
        return this.#metadataSet.getPath();
    }
    getReviewOnSchedule(): boolean {
        return this.getProperty().reviewOnSchedule;
    }
    getReviewEvery(): number {
        return this.getProperty().reviewEvery;
    }
    // update(params: Array<any>): Asset {
    //     DublinAwareAsset.staticUpdateMetadata(this, params);
    //     DublinAwareAsset.staticUpdateData(this, params);
    //     return this;
    // } 
    // updateMetadata(params: Array<any>, commit:boolean = true) {
    //     DublinAwareAsset.staticUpdateMetadata(this, params, commit);
    //     return this;
    // }
    // static staticUpdateMetadata(a: Linkable, params: any, commit: boolean = true) {
    //     let metadata = a.getMetadata();
    // }

    //more code
}