import Asset from "./asset.js";
import * as c from "../constants.js";
export default class ContainedAsset extends Asset {
    constructor(service, identifier) {
        super(service, identifier);
    }
    copy(parent, newName) {
        return 0;
    }
    getParentContainer() {
        if (this.getType() == c.TYPES.SITE) {
            throw new Error('Wrong Asset Type - Site has no parent');
        }
        if (this.getParentContainerId()) {
            let parentId = this.getParentContainerId();
            let parentType = c.parentTypeMap[this.getType()];
            return Asset.getAsset(this.getService(), parentType, parentId);
        }
        return null;
    }
    getParentContainerId() {
        if (this.getType() == c.TYPES.SITE) {
            throw new Error('No Parent Container for Site');
        }
        if (this.getProperty().parentFolderId) {
            return this.getProperty().parentFolderId;
        }
        else if (this.getProperty().parentContainerId) {
            return this.getProperty().parentContainerId;
        }
        else {
            return null;
        }
    }
    getParentContainerPath() {
        if (this.getType() == c.TYPES.SITE) {
            throw new Error('No Parent Container for Site');
        }
        if (this.getProperty().parentFolderPath) {
            return this.getProperty().parentFolderPath;
        }
        else if (this.getProperty().parentContainerPath) {
            return this.getProperty().parentContainerPath;
        }
        else
            return null;
    }
    getSiteId() {
        if (this.getType() == c.TYPES.SITE) {
            return this.getId();
        }
        if (this.getProperty().siteId) {
            return this.getProperty().siteId;
        }
        return null;
    }
    getSiteName() {
        if (this.getType() == c.TYPES.SITE) {
            return this.getName();
        }
        if (this.getProperty().siteName) {
            return this.getProperty().siteName;
        }
        return null;
    }
    isChildOf(container) {
        if (this.getType() == c.TYPES.SITE) {
            throw new Error('No Parent Container for Site');
        }
        return container.getId() == this.getParentContainerId();
    }
    isContainedby(container) {
        return this.isDescendantOf(container);
    }
    isDescendantOf(container) {
        if (this.getType() == c.TYPES.SITE) {
            throw new Error('Site has no parent container');
        }
        return container.isAncestorOf(this);
    }
    isInContainer(container) {
        return this.isDescendantOf(container);
    }
}
//# sourceMappingURL=ContainedAsset.js.map