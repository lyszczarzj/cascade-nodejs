var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DublinAwareAsset_metadataSet;
import { FolderContainedAsset, MetadataSet, Page } from '../internal.js';
export default class DublinAwareAsset extends FolderContainedAsset {
    constructor(service, identifier) {
        super(service, identifier);
        _DublinAwareAsset_metadataSet.set(this, void 0);
        if (this.getType() != Page.TYPE) {
            __classPrivateFieldSet(this, _DublinAwareAsset_metadataSet, new MetadataSet(service, service.createId(MetadataSet.TYPE, this.getProperty().metadataSetId)), "f");
        }
    }
    getMetadataSet() {
        return __classPrivateFieldGet(this, _DublinAwareAsset_metadataSet, "f");
    }
    getMetadataSetId() {
        return __classPrivateFieldGet(this, _DublinAwareAsset_metadataSet, "f").getId();
    }
    getMetadataSetPath() {
        return __classPrivateFieldGet(this, _DublinAwareAsset_metadataSet, "f").getPath();
    }
    getReviewOnSchedule() {
        return this.getProperty().reviewOnSchedule;
    }
    getReviewEvery() {
        return this.getProperty().reviewEvery;
    }
}
_DublinAwareAsset_metadataSet = new WeakMap();
//# sourceMappingURL=DublinAwareAsset.js.map