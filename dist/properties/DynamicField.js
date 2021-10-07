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
var _DynamicField_name, _DynamicField_fieldValues, _DynamicField_service;
import Property from "./Property.js";
import FieldValue from "./FieldValue.js";
export default class DynamicField extends Property {
    constructor(json, service = null, data1 = null, data2 = null, data3 = null) {
        super(json, service, data1, data2, data3);
        _DynamicField_name.set(this, void 0);
        _DynamicField_fieldValues.set(this, void 0);
        _DynamicField_service.set(this, void 0);
        if (service == null) {
            throw new Error("Null Service");
        }
        __classPrivateFieldSet(this, _DynamicField_service, service, "f");
        if (typeof json != undefined) {
            if ('name' in json) {
                __classPrivateFieldSet(this, _DynamicField_name, json.name, "f");
            }
            if ('fieldValues' in json) {
                this.processFieldValues(json.fieldValues);
            }
            else {
                __classPrivateFieldSet(this, _DynamicField_fieldValues, new FieldValue({}, __classPrivateFieldGet(this, _DynamicField_service, "f")), "f");
            }
        }
    }
    getFieldValue() {
        if (typeof __classPrivateFieldGet(this, _DynamicField_fieldValues, "f") == undefined) {
            console.log("null field value");
        }
        return __classPrivateFieldGet(this, _DynamicField_fieldValues, "f");
    }
    toObject() {
        if (typeof __classPrivateFieldGet(this, _DynamicField_name, "f") == undefined) {
            return null;
        }
        const obj = {
            name: __classPrivateFieldGet(this, _DynamicField_name, "f"),
            fieldValues: "toast"
        };
        let fvs = undefined;
        if (typeof __classPrivateFieldGet(this, _DynamicField_fieldValues, "f") != undefined) {
            fvs = __classPrivateFieldGet(this, _DynamicField_fieldValues, "f").toObject();
        }
        else {
            fvs = [];
        }
        obj['fieldValues'] = fvs;
        return obj;
    }
    processFieldValues(values) {
        var obj;
        if (Array.isArray(values)) {
            obj = {
                array: values
            };
        }
        else {
            obj = values;
        }
        __classPrivateFieldSet(this, _DynamicField_fieldValues, new FieldValue(obj, __classPrivateFieldGet(this, _DynamicField_service, "f")), "f");
    }
}
_DynamicField_name = new WeakMap(), _DynamicField_fieldValues = new WeakMap(), _DynamicField_service = new WeakMap();
//# sourceMappingURL=DynamicField.js.map