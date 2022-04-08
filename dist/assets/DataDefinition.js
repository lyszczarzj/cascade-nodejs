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
var _DataDefinition_attributes, _DataDefinition_identifiers, _DataDefinition_code, _DataDefinition_xml, _DataDefinition_structuredData, _DataDefinition_simpleXMLElement, _DataDefinition_sharedFields;
import { ContainedAsset } from '../internal.js';
export default class DataDefinition extends ContainedAsset {
    constructor(service, identifier) {
        super(service, identifier);
        _DataDefinition_attributes.set(this, void 0);
        _DataDefinition_identifiers.set(this, void 0);
        _DataDefinition_code.set(this, void 0);
        _DataDefinition_xml.set(this, void 0);
        _DataDefinition_structuredData.set(this, void 0);
        _DataDefinition_simpleXMLElement.set(this, void 0);
        _DataDefinition_sharedFields.set(this, void 0);
        __classPrivateFieldSet(this, _DataDefinition_sharedFields, [], "f");
        __classPrivateFieldSet(this, _DataDefinition_code, this.getProperty().xml, "f");
        __classPrivateFieldSet(this, _DataDefinition_attributes, [], "f");
        __classPrivateFieldSet(this, _DataDefinition_structuredData, {}, "f");
    }
    getStructuredData() {
        return __classPrivateFieldGet(this, _DataDefinition_structuredData, "f");
    }
}
_DataDefinition_attributes = new WeakMap(), _DataDefinition_identifiers = new WeakMap(), _DataDefinition_code = new WeakMap(), _DataDefinition_xml = new WeakMap(), _DataDefinition_structuredData = new WeakMap(), _DataDefinition_simpleXMLElement = new WeakMap(), _DataDefinition_sharedFields = new WeakMap();
//# sourceMappingURL=DataDefinition.js.map