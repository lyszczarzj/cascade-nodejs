var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Folder_includeInStaleContent, _Folder_metadata, _Folder_workflowSettings;
import { Container, Metadata } from '../internal.js';
export default class Folder extends Container {
    constructor(service, identifier) {
        super(service, identifier);
        _Folder_includeInStaleContent.set(this, void 0);
        _Folder_metadata.set(this, void 0);
        _Folder_workflowSettings.set(this, void 0);
        this.processMetadata();
        if (typeof this.getProperty().includeInStaleContent != undefined) {
            __classPrivateFieldSet(this, _Folder_includeInStaleContent, this.getProperty().includeInStaleContent, "f");
        }
        else {
            __classPrivateFieldSet(this, _Folder_includeInStaleContent, false, "f");
        }
    }
    processMetadata() {
        __classPrivateFieldSet(this, _Folder_metadata, new Metadata(this.getProperty().metadata, this.getService(), this.getProperty().metadataSetId, this), "f");
    }
}
_Folder_includeInStaleContent = new WeakMap(), _Folder_metadata = new WeakMap(), _Folder_workflowSettings = new WeakMap();
//# sourceMappingURL=Folder.js.map