import pathClass from "./properties/Path.js";
import * as c from "./constants.js";

export interface path {
    path: string;
    siteId?: string;
    siteName?: string;
}

export interface Child {
    path?: path;
    id?: string;
    type: string;
    recycled?: boolean;
}

export interface Request {
    method: string;
    headers: { 
      Authorization: string;
    },
    body?: string;
}

export interface Identifier extends Child {

}

export interface dynamicMetadataFieldDefinition {
    name: string;
    label: string;
    fieldType: string;
    required: boolean;
    visibility: string;
    possibleValues: Array<string>;
    helpText: string;
}

export interface metadata {
    author: string,
    displayName: string,
    endDate: string,
    keywords: string[],
    metaDescription: string,
    reviewDate: string,
    startDate: string,
    summary: string,
    teaser: string,
    title: string,
    dynamicFields: any
}


