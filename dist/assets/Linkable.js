var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Linkable_metadata, _Linkable_page_content_type;
import { DublinAwareAsset, Metadata, c, Page } from '../internal.js';
export default class Linkable extends DublinAwareAsset {
    constructor() {
        super(...arguments);
        _Linkable_metadata.set(this, void 0);
        _Linkable_page_content_type.set(this, void 0);
    }
    getCreatedBy() {
        return this.getProperty().createdBy;
    }
    getCreatedDate() {
        return this.getProperty().createdDate;
    }
    getDynamicField(name) {
        return __classPrivateFieldGet(this, _Linkable_metadata, "f").getDynamicField(name);
    }
    getDynamicFields() {
        return __classPrivateFieldGet(this, _Linkable_metadata, "f").getDynamicFields();
    }
    getExpirationFolderId() {
        if (typeof this.getProperty().expirationFolderId != undefined) {
            return this.getProperty().expirationFolderId;
        }
        return null;
    }
    getExpirationFolderPath() {
        if (typeof this.getProperty().expirationFolderPath != undefined) {
            return this.getProperty().expirationFolderPath;
        }
        return null;
    }
    getExpirationFolderRecycled() {
        return this.getProperty().expirationFolderRecycled;
    }
    getLastModifiedBy() {
        return this.getProperty().lastModifiedBy;
    }
    getLastModifiedDate() {
        return this.getProperty().lastModifiedDate;
    }
    getMetadata() {
        return __classPrivateFieldGet(this, _Linkable_metadata, "f");
    }
    getMetadataObject() {
        return __classPrivateFieldGet(this, _Linkable_metadata, "f").toObject();
    }
    hasDynamicField(name) {
        return __classPrivateFieldGet(this, _Linkable_metadata, "f").hasDynamicField(name);
    }
    setExpirationFolder() {
        return;
    }
    setMetadata(m) {
        __classPrivateFieldSet(this, _Linkable_metadata, m, "f");
        this.edit();
        this.processMetadata();
        return this;
    }
    setMetadataSet(m) {
        if (m == null) {
            throw new Error('Null Asset');
        }
        if (this.getType() == c.TYPES.PAGE) {
            throw new Error('Wrong Asset Type');
        }
        this.getProperty().metadataSetId = m.getId();
        this.getProperty().metadataSetPath = m.getPath();
        this.edit();
        this.processMetadata();
        return this;
    }
    setPageContentType() {
    }
    processMetadata() {
        let metadataSetId = "";
        if (this instanceof Page && typeof __classPrivateFieldGet(this, _Linkable_page_content_type, "f") != undefined) {
            metadataSetId = __classPrivateFieldGet(this, _Linkable_page_content_type, "f").getMetadataSetId();
        }
        else {
            metadataSetId = this.getProperty().metadataSetId;
        }
        __classPrivateFieldSet(this, _Linkable_metadata, new Metadata(this.getProperty().metadata, this.getService(), metadataSetId, this), "f");
    }
}
_Linkable_metadata = new WeakMap(), _Linkable_page_content_type = new WeakMap();
//# sourceMappingURL=Linkable.js.map