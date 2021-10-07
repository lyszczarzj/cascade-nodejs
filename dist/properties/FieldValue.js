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
var _FieldValue_service, _FieldValue_values;
import Property from "./Property.js";
export default class FieldValue extends Property {
    constructor(fieldValues, service = null, data1 = null, data2 = null, data3 = null) {
        super(fieldValues, service, data1, data2, data3);
        _FieldValue_service.set(this, void 0);
        _FieldValue_values.set(this, void 0);
        if (service == null) {
            throw new Error("Null Service");
        }
        if (typeof fieldValues != undefined) {
            if ('array' in fieldValues && fieldValues.array.length > 0) {
                this.processValues(fieldValues);
            }
            else {
                if ('value' in fieldValues) {
                    __classPrivateFieldGet(this, _FieldValue_values, "f").push(fieldValues.value);
                }
            }
        }
    }
    getValues() {
        return __classPrivateFieldGet(this, _FieldValue_values, "f");
    }
    setValues(values) {
        let count = values.length;
        __classPrivateFieldSet(this, _FieldValue_values, [], "f");
        if (count == 1) {
            if (values[0] == null)
                __classPrivateFieldGet(this, _FieldValue_values, "f").push(null);
            else {
                __classPrivateFieldGet(this, _FieldValue_values, "f").push(values[0].value);
            }
        }
        else {
            values.forEach((value) => {
                if (value.value == null || value.value == "") {
                    throw new Error('Empty Value');
                }
                if (__classPrivateFieldGet(this, _FieldValue_values, "f").includes(value.value)) {
                    throw new Error('Value not Unique');
                }
                else {
                    __classPrivateFieldGet(this, _FieldValue_values, "f").push(value.value);
                }
            });
        }
        return this;
    }
    toObject() {
        let obj = [];
        let count = __classPrivateFieldGet(this, _FieldValue_values, "f").length;
        if (count == 0) {
            obj = [];
        }
        else if (count == 1) {
            let value = {};
            if (__classPrivateFieldGet(this, _FieldValue_values, "f")[0] != '') {
                value['value'] = __classPrivateFieldGet(this, _FieldValue_values, "f")[0];
                obj.push(value);
            }
            else if (__classPrivateFieldGet(this, _FieldValue_values, "f")[0] == '' || __classPrivateFieldGet(this, _FieldValue_values, "f")[0] == null) {
                obj = [];
            }
        }
        else {
            for (let i = 0; i < count; i++) {
                let value = { value: __classPrivateFieldGet(this, _FieldValue_values, "f")[i] };
                obj.push(value);
            }
        }
        return obj;
    }
    processValues(values) {
        values = values.array;
        values.forEach((value) => {
            if (typeof value.value != undefined) {
                __classPrivateFieldGet(this, _FieldValue_values, "f").push(value.value);
            }
        });
    }
}
_FieldValue_service = new WeakMap(), _FieldValue_values = new WeakMap();
//# sourceMappingURL=FieldValue.js.map