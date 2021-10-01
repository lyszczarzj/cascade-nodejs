import pathClass from "./properties/Path.js";

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


