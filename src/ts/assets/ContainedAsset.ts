
// import './factory.js';
// import Factory from "./factory.js";
// import Asset from "./asset.js";
// import RequestService from "../RequestService.js";
// import * as Struct from "../struct.js";
// import Container from "./Container.js";
// import * as c from "../constants.js";

import {RequestService, Asset, Factory, Struct, c, Container} from "../internal.js"

export default class ContainedAsset extends Asset {
    constructor(service: RequestService, identifier: Struct.Identifier) {
        super(service, identifier);
    }
    //add methods
    copy (parent: Container, newName: string) {
        //toDo
        return 0
    }
    getParentContainer(): Asset | null {
        if (this.getType() == c.TYPES.SITE) {
            throw new Error('Wrong Asset Type - Site has no parent');
        }

        if (this.getParentContainerId()) {
            let parentId = this.getParentContainerId();
            let parentType = c.parentTypeMap[this.getType()];

            return Factory.getAsset(this.getService(), parentType, parentId);
        }

        return null;
    }
    getParentContainerId(): string | null {
        if (this.getType() == c.TYPES.SITE) {
            throw new Error('No Parent Container for Site')
        }
        if (this.getProperty().parentFolderId) {
            return this.getProperty().parentFolderId;
        } else if (this.getProperty().parentContainerId) {
            return this.getProperty().parentContainerId;
        } else {
            return null
        }
    }
    getParentContainerPath(): string | null 
    {
        if (this.getType() == c.TYPES.SITE) {
            throw new Error('No Parent Container for Site')
        }
        
        if(this.getProperty().parentFolderPath) {
            return this.getProperty().parentFolderPath;
        }
        else if(this.getProperty().parentContainerPath) {
            return this.getProperty().parentContainerPath;
        }
        else
            return null;
    }
    getSiteId(): string {
        if (this.getType() == c.TYPES.SITE) {
            return this.getId();
        }

        if(this.getProperty().siteId) {
            return this.getProperty().siteId;
        }
        return null;
    }
    getSiteName(): string {
        if (this.getType() == c.TYPES.SITE) {
            return this.getName();
        }

        if (this.getProperty().siteName) {
            return this.getProperty().siteName;
        }
        return null;
    }
    isChildOf(container: Container): boolean {
        if (this.getType() == c.TYPES.SITE) {
            throw new Error('No Parent Container for Site')
        }
        return container.getId() == this.getParentContainerId();
    }
    isContainedby(container: Container): boolean {
        return this.isDescendantOf(container);
    }
    isDescendantOf(container: Container): boolean {
        if (this.getType() == c.TYPES.SITE) {
            throw new Error('Site has no parent container')
        }
        return container.isAncestorOf(this);
    }
    isInContainer(container: Container): boolean {
        return this.isDescendantOf(container);
    }
    

}