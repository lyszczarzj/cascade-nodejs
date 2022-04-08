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
var _ContentType_contentTypePageConfigurations, _ContentType_contentTypePageConfigurationNames, _ContentType_inlineEditableFields, _ContentType_inlineEditableFieldMap, _ContentType_inlineEditableFieldNames, _ContentType_dataDefinition, _ContentType_metadataSet, _ContentType_conigurationSet, _ContentType_wiredFieldTypes;
import { ContainedAsset, DataDefinition, c } from '../internal.js';
export default class ContentType extends ContainedAsset {
    constructor(service, identifier) {
        super(service, identifier);
        _ContentType_contentTypePageConfigurations.set(this, void 0);
        _ContentType_contentTypePageConfigurationNames.set(this, void 0);
        _ContentType_inlineEditableFields.set(this, void 0);
        _ContentType_inlineEditableFieldMap.set(this, void 0);
        _ContentType_inlineEditableFieldNames.set(this, void 0);
        _ContentType_dataDefinition.set(this, void 0);
        _ContentType_metadataSet.set(this, void 0);
        _ContentType_conigurationSet.set(this, void 0);
        _ContentType_wiredFieldTypes.set(this, void 0);
        if (typeof this.getProperty().dataDefinitionId !== undefined) {
            __classPrivateFieldSet(this, _ContentType_dataDefinition, new DataDefinition(service, service.createId(c.TYPES.DATADEFINITION, this.getProperty().dataDefinitionId)), "f");
        }
    }
    getDataDefinition() {
        if (typeof __classPrivateFieldGet(this, _ContentType_dataDefinition, "f") !== undefined) {
            return __classPrivateFieldGet(this, _ContentType_dataDefinition, "f");
        }
        return null;
    }
}
_ContentType_contentTypePageConfigurations = new WeakMap(), _ContentType_contentTypePageConfigurationNames = new WeakMap(), _ContentType_inlineEditableFields = new WeakMap(), _ContentType_inlineEditableFieldMap = new WeakMap(), _ContentType_inlineEditableFieldNames = new WeakMap(), _ContentType_dataDefinition = new WeakMap(), _ContentType_metadataSet = new WeakMap(), _ContentType_conigurationSet = new WeakMap(), _ContentType_wiredFieldTypes = new WeakMap();
//# sourceMappingURL=ContentType.js.map