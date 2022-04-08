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
var _DynamicMetadataFieldDefinition_service, _DynamicMetadataFieldDefinition_name, _DynamicMetadataFieldDefinition_label, _DynamicMetadataFieldDefinition_fieldType, _DynamicMetadataFieldDefinition_required, _DynamicMetadataFieldDefinition_visibility, _DynamicMetadataFieldDefinition_possibleValues, _DynamicMetadataFieldDefinition_values, _DynamicMetadataFieldDefinition_helpText;
import { Property, c, PossibleValue } from "../internal.js";
export default class DynamicMetadataFieldDefinition extends Property {
    constructor(obj, service = null, data1 = null, data2 = null, data3 = null) {
        super(obj, service, data1, data2, data3);
        _DynamicMetadataFieldDefinition_service.set(this, void 0);
        _DynamicMetadataFieldDefinition_name.set(this, void 0);
        _DynamicMetadataFieldDefinition_label.set(this, void 0);
        _DynamicMetadataFieldDefinition_fieldType.set(this, void 0);
        _DynamicMetadataFieldDefinition_required.set(this, void 0);
        _DynamicMetadataFieldDefinition_visibility.set(this, void 0);
        _DynamicMetadataFieldDefinition_possibleValues.set(this, void 0);
        _DynamicMetadataFieldDefinition_values.set(this, void 0);
        _DynamicMetadataFieldDefinition_helpText.set(this, void 0);
        if (service == null) {
            throw new Error("Null Service");
        }
        __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_service, service, "f");
        if (typeof obj != undefined) {
            if ('name' in obj && typeof obj.name != undefined) {
                __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_name, obj.name, "f");
            }
            if ('label' in obj && typeof obj.label != undefined) {
                __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_label, obj.label, "f");
            }
            if ('fieldType' in obj && typeof obj.fieldType != undefined) {
                __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_fieldType, obj.fieldType, "f");
            }
            if ('required' in obj && typeof obj.required != undefined) {
                __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_required, obj.required, "f");
            }
            if ('visibility' in obj && typeof obj.visibility != undefined) {
                __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_visibility, obj.visibility, "f");
            }
            if ('helpText' in obj && typeof obj.helpText != undefined) {
                __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_helpText, obj.helpText, "f");
            }
        }
        if (typeof obj.possibleValues != undefined && obj.possibleValues != null) {
            this.processPossibleValues(obj.possibleValues);
        }
    }
    appendValue(value) {
        if (__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f") == null) {
            console.log('no possible value');
            return this;
        }
        value = value.trim();
        if (value == '') {
            throw new Error('Empty Value');
        }
        if (!this.hasPossibleValue(value)) {
            const obj = {
                value: value,
                selectedByDefault: false,
            };
            __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f").push(new PossibleValue(obj));
            __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_values, "f").push(value);
        }
        else {
            console.log("The value" + value + "already exists");
            console.log('');
        }
        return this;
    }
    getDefaultValue() {
        __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f").forEach((ps) => {
            if (ps.isDefaultValue()) {
                return ps;
            }
        });
        return null;
    }
    getDefaultValueString() {
        __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f").forEach((ps) => {
            if (ps.isDefaultValue()) {
                return ps.getValue();
            }
        });
        return null;
    }
    getFieldType() {
        return __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_fieldType, "f");
    }
    getHelpText() {
        return __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_helpText, "f");
    }
    getLabel() {
        return __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_label, "f");
    }
    getName() {
        return __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_name, "f");
    }
    getPossibleValue(value) {
        __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f").forEach((possibleValue) => {
            if (possibleValue.getValue() == value) {
                return possibleValue;
            }
        });
        throw new Error("The value" + value + "does not exist");
    }
    getPossibleValues() {
        return __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f");
    }
    getPossibleValueStrings() {
        if (__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f") == null) {
            console.log('no possible values');
            return "";
        }
        return __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_values, "f");
    }
    getRequired() {
        return __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_required, "f");
    }
    getVisibility() {
        return __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_visibility, "f");
    }
    hasDefaultValue() {
        if (!this.isText()) {
            __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f").forEach((ps) => {
                if (ps.isDefaultValue()) {
                    return true;
                }
            });
        }
        return false;
    }
    hasPossibleValue(value) {
        if (__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f") == null) {
            console.log('no possible values');
            return false;
        }
        return __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_values, "f").includes(value);
    }
    isCheckbox() {
        return this.getFieldType() == c.TYPES.CHECKBOX;
    }
    isDateTime() {
        return this.getFieldType() == c.TYPES.DATETIME;
    }
    isDropdown() {
        return this.getFieldType() == c.TYPES.DROPDOWN;
    }
    isMultiselect() {
        return this.getFieldType() == c.TYPES.MULTISELECT;
    }
    isRadio() {
        return this.getFieldType() == c.TYPES.RADIO;
    }
    isText() {
        return this.getFieldType() == c.TYPES.TEXT;
    }
    isRequired() {
        return __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_required, "f");
    }
    removeValue(value) {
        if (__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f") == null) {
            console.log('no possible value');
            return this;
        }
        if (value == '') {
            throw new Error('The value cannot be empty');
        }
        if (!__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_values, "f").includes(value)) {
            throw new Error('the value' + value + ' does not exist');
        }
        let count = __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f").length;
        for (let i = 0; i < count; i++) {
            if (__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f")[i].getValue() == value) {
                let before = __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f").slice(0, i);
                let valuesBefore = __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_values, "f").slice(0, i);
                let after = [];
                let valuesAfter = [];
                if (count - i > 1) {
                    after = __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f").slice(i + 1);
                    valuesAfter = __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_values, "f").slice(i + 1);
                }
                __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_possibleValues, before.concat(after), "f");
                __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_values, valuesBefore.concat(valuesAfter), "f");
                break;
            }
        }
        return this;
    }
    setHelpText(helpText) {
        __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_helpText, helpText, "f");
        return this;
    }
    setLabel(label) {
        label = label.trim();
        if (label == '') {
            throw new Error('The label cannot be empty');
        }
        __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_label, label, "f");
        return this;
    }
    setRequired(required) {
        if (!(typeof required == "boolean")) {
            throw new Error('The value required must be a boolean');
        }
        if (required) {
            __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_visibility, c.TYPES.VISIBLE, "f");
        }
        __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_required, required, "f");
        return this;
    }
    setSelectedByDefault(value) {
        if (!__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_values, "f").includes(value)) {
            throw new Error('The value ' + value + ' does not exist');
        }
        __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f").forEach((item) => {
            if (item.getValue() == value) {
                item.setSelectedByDefault(true);
            }
            if (__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_fieldType, "f") == c.TYPES.RADIO || __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_fieldType, "f") == c.TYPES.DROPDOWN) {
                if (item.getValue() != value) {
                    item.setSelectedByDefault(false);
                }
            }
        });
        return this;
    }
    setVisibility(visibility) {
        if (!c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable");
        }
        if (visibility == c.TYPES.HIDDEN) {
            __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_required, false, "f");
            __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_visibility, visibility, "f");
        }
        else {
            __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_visibility, visibility, "f");
        }
        return this;
    }
    swapValues(value1, value2) {
        if (__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f") == null) {
            console.log('No Possible Value');
            return this;
        }
        if (value1 == '' || value2 == '') {
            throw new Error('The value cannot be empty');
        }
        if (!__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_values, "f").includes(value1)) {
            throw new Error('The value ' + value1 + ' does not exist');
        }
        if (!__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_values, "f").includes(value2)) {
            throw new Error('The value ' + value2 + ' does not exist');
        }
        let firstPvPos = -1;
        let secondPvPos = -1;
        let count = __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f").length;
        for (let i = 0; i < i; i++) {
            if (__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f")[i].getValue() == value1) {
                firstPvPos = i;
            }
            if (__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f")[i].getValue() == value2) {
                secondPvPos = i;
            }
        }
        let tempVal = __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_values, "f")[firstPvPos];
        __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_values, "f")[firstPvPos] = value2;
        __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_values, "f")[secondPvPos] = value1;
        let temp = __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f")[firstPvPos];
        __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f")[firstPvPos] = __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f")[secondPvPos];
        __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f")[secondPvPos] = temp;
        return this;
    }
    toObject() {
        const obj = {
            name: __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_name, "f"),
            label: __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_label, "f"),
            fieldType: __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_fieldType, "f"),
            required: __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_required, "f"),
            visibility: __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_visibility, "f"),
            helpText: __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_helpText, "f"),
            possibleValues: new Array()
        };
        if (typeof __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f") != undefined) {
            let count = __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f").length;
            if (count == 1) {
                obj.possibleValues.push(__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f")[0].toObject());
            }
            else {
                let vArray = new Array();
                let selectedCount = 0;
                for (let i = 0; i < count; i++) {
                    let currValue = __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f")[i].getValue();
                    if (__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f")[i].getSelectedByDefault()) {
                        selectedCount++;
                        if (selectedCount > 1 && (__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_fieldType, "f") == c.TYPES.RADIO || __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_fieldType, "f") == c.TYPES.DROPDOWN)) {
                            throw new Error('Multiple values have been selected by default');
                        }
                    }
                    if (vArray.includes(currValue)) {
                        throw new Error('Repeated Value Found');
                    }
                    else {
                        vArray.push(currValue);
                    }
                    obj.possibleValues.push(__classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f")[i].toObject());
                }
            }
        }
        else {
            obj.possibleValues = new Array();
        }
        return obj;
    }
    unsetSelectedByDefault(value) {
        if (!this.hasPossibleValue(value)) {
            throw new Error('The value ' + value + ' does not exist');
        }
        __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f").forEach((item) => {
            if (item.getValue() == value) {
                item.setSelectedByDefault(false);
            }
        });
        return this;
    }
    processPossibleValues(values) {
        __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_possibleValues, new Array(), "f");
        __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_values, new Array(), "f");
        if (values == null) {
            __classPrivateFieldSet(this, _DynamicMetadataFieldDefinition_possibleValues, null, "f");
            return;
        }
        if (!Array.isArray(values)) {
            values = new Array(values);
        }
        let count = values.length;
        for (let i = 0; i < count; i++) {
            __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_possibleValues, "f").push(new PossibleValue(values[i]));
            __classPrivateFieldGet(this, _DynamicMetadataFieldDefinition_values, "f").push(values[i].value);
        }
    }
}
_DynamicMetadataFieldDefinition_service = new WeakMap(), _DynamicMetadataFieldDefinition_name = new WeakMap(), _DynamicMetadataFieldDefinition_label = new WeakMap(), _DynamicMetadataFieldDefinition_fieldType = new WeakMap(), _DynamicMetadataFieldDefinition_required = new WeakMap(), _DynamicMetadataFieldDefinition_visibility = new WeakMap(), _DynamicMetadataFieldDefinition_possibleValues = new WeakMap(), _DynamicMetadataFieldDefinition_values = new WeakMap(), _DynamicMetadataFieldDefinition_helpText = new WeakMap();
//# sourceMappingURL=DynamicMetadataFieldDefinition.js.map