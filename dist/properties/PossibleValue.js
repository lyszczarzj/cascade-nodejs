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
var _PossibleValue_label, _PossibleValue_selectedByDefault, _PossibleValue_value;
import { Property, c } from '../internal.js';
export default class PossibleValue extends Property {
    constructor(v, service = null, data1 = null, data2 = null, data3 = null) {
        super(v, service, data1, data2, data3);
        _PossibleValue_label.set(this, void 0);
        _PossibleValue_selectedByDefault.set(this, void 0);
        _PossibleValue_value.set(this, void 0);
        if (typeof v != undefined) {
            if (v.value == null || v.value == '') {
                throw new Error('Empty Value');
            }
            if (!c.BooleanValues.isBoolean(v.selectedByDefault)) {
                throw new Error('The value ' + v.selectedByDefault + ' must be a boolean');
            }
            if (typeof v.label != undefined) {
                __classPrivateFieldSet(this, _PossibleValue_label, v.label, "f");
            }
            __classPrivateFieldSet(this, _PossibleValue_value, v.value, "f");
            __classPrivateFieldSet(this, _PossibleValue_selectedByDefault, v.selectedByDefault, "f");
        }
    }
    getLabel() {
        return __classPrivateFieldGet(this, _PossibleValue_label, "f");
    }
    getSelectedByDefault() {
        return __classPrivateFieldGet(this, _PossibleValue_selectedByDefault, "f");
    }
    getValue() {
        return __classPrivateFieldGet(this, _PossibleValue_value, "f");
    }
    isDefaultValue() {
        return __classPrivateFieldGet(this, _PossibleValue_selectedByDefault, "f");
    }
    setLabel(label = null) {
        if (typeof __classPrivateFieldGet(this, _PossibleValue_value, "f") != undefined) {
            if (typeof label != undefined && label.trim() == "") {
                throw new Error("The label cannot be empty");
            }
            __classPrivateFieldSet(this, _PossibleValue_label, label, "f");
        }
        return this;
    }
    setSelectedByDefault(bool) {
        if (!c.BooleanValues.isBoolean(bool)) {
            throw new Error('The value ' + bool + ' must be a boolean');
        }
        __classPrivateFieldSet(this, _PossibleValue_selectedByDefault, bool, "f");
        return this;
    }
    toObject() {
        if (__classPrivateFieldGet(this, _PossibleValue_value, "f") == null || __classPrivateFieldGet(this, _PossibleValue_value, "f") == '') {
            throw new Error('Empty Value');
        }
        const obj = {
            label: __classPrivateFieldGet(this, _PossibleValue_label, "f"),
            value: __classPrivateFieldGet(this, _PossibleValue_value, "f"),
            selectedByDefault: __classPrivateFieldGet(this, _PossibleValue_selectedByDefault, "f")
        };
        return obj;
    }
}
_PossibleValue_label = new WeakMap(), _PossibleValue_selectedByDefault = new WeakMap(), _PossibleValue_value = new WeakMap();
//# sourceMappingURL=PossibleValue.js.map