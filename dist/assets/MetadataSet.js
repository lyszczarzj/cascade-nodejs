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
var _MetadataSet_dynamicMetadataFieldDefinitions, _MetadataSet_fieldNames;
import { ContainedAsset, c, DynamicMetadataFieldDefinition, AssetTemplate, Metadata } from '../internal.js';
export default class MetadataSet extends ContainedAsset {
    constructor(service, identifier) {
        super(service, identifier);
        _MetadataSet_dynamicMetadataFieldDefinitions.set(this, void 0);
        _MetadataSet_fieldNames.set(this, void 0);
        if (typeof this.getProperty().dynamicMetadataFieldDefinitions != undefined) {
            this.processDynamicMetadataFieldDefinition();
        }
    }
    addDynamicFieldDefinition(fieldName, type, label, required = false, visibility = c.TYPES.VISIBLE, possibleValues = "", helpText = "") {
        if (this.hasDynamicMetadataFieldDefinition(fieldName)) {
            throw new Error(`The Dynamic Field Definition ${fieldName} already exists`);
        }
        if (type != c.TYPES.TEXT && possibleValues.trim() != "") {
            throw new Error('empty possible values');
        }
        let dmfd = AssetTemplate.getDynamicMetadataFieldDefinition();
        dmfd.dynamicMetadataFieldDefinition.name = fieldName;
        dmfd.dynamicMetadataFieldDefinition.label = label;
        dmfd.dynamicMetadataFieldDefinition.fieldType = type;
        dmfd.dynamicMetadataFieldDefinition.required = required;
        dmfd.dynamicMetadataFieldDefinition.visibility = visibility;
        dmfd.dynamicMetadataFieldDefinition.helpText = helpText;
        if (type != c.TYPES.TEXT) {
            dmfd.dynamicMetadataFieldDefinition.possibleValues = new Array();
            let values = possibleValues.split(";");
            let valueCount = values.length;
            if (valueCount == 1) {
                let pv = {
                    value: values[0],
                    selectedByDefault: false,
                };
                dmfd.dynamicMetadataFieldDefinition.possibleValues.push(pv);
            }
            else {
                values.forEach((value) => {
                    let pv = {
                        value: value,
                        selectedByDefault: false
                    };
                    dmfd.dynamicMetadataFieldDefinition.possibleValues.push(pv);
                });
            }
            let dmfdObj = new DynamicMetadataFieldDefinition(dmfd.dynamicMetadataFieldDefinition, this.getService());
            __classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f").push(dmfdObj);
            this.edit();
            this.processDynamicMetadataFieldDefinition();
            return this;
        }
    }
    addField(fieldName, type, label, required = false, visibility = c.TYPES.VISIBLE, possibleValues = "", helpText = "") {
        return this.addDynamicFieldDefinition(fieldName, type, label, required, visibility, possibleValues, helpText);
    }
    appendValue(name, value) {
        value = value.trim();
        if (value == '') {
            throw new Error('Empty Value');
        }
        let def = this.getDynamicMetadataFieldDefinition(name);
        def.appendValue(value);
        this.edit();
        this.processDynamicMetadataFieldDefinition();
        return this;
    }
    edit(wf = null, wd = null, newWorkflowName = "", comment = "", exception = true) {
        console.log("Should edit the asset here!");
        return;
    }
    getAuthorFieldRequired() {
        return this.getProperty().authorFieldRequired;
    }
    getAuthorFieldVisibility() {
        return this.getProperty().authorFieldVisibility;
    }
    getDescriptionFieldHelpText() {
        if (typeof this.getProperty().descriptionFieldHelpText != undefined)
            return this.getProperty().descriptionFieldHelpText;
        return null;
    }
    getDescriptionFieldRequired() {
        return this.getProperty().descriptionFieldRequired;
    }
    getDescriptionFieldVisibility() {
        return this.getProperty().descriptionFieldVisibility;
    }
    getDisplayNameFieldHelpText() {
        if (typeof this.getProperty().displayNameFieldHelpText != undefined)
            return this.getProperty().displayNameFieldHelpText;
        return null;
    }
    getDisplayNameFieldRequired() {
        return this.getProperty().displayNameFieldRequired;
    }
    getDisplayNameFieldVisibility() {
        return this.getProperty().displayNameFieldVisibility;
    }
    getDynamicMetadataFieldDefinition(name) {
        if (!this.hasDynamicMetadataFieldDefinition(name)) {
            throw new Error("The definition " + name + " does not exist.");
        }
        return __classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f").find(element => {
            element.getName() == name;
        });
    }
    getDynamicMetadataFieldDefinitionNames() {
        return __classPrivateFieldGet(this, _MetadataSet_fieldNames, "f");
    }
    getDynamicMetadataFieldDefinitionsStdClass() {
        return this.getProperty().dynamicMetadataFieldDefinitions;
    }
    getDynamicMetadataFieldPossibleValueStrings(name) {
        if (!this.hasDynamicMetadataFieldDefinition(name))
            throw new Error('The definition does not exist ');
        let element = __classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f").find(element => element.getName() == name);
        return element.getPossibleValueStrings();
    }
    getEndDateFieldHelpText() {
        if (typeof this.getProperty().endDateFieldHelpText != undefined) {
            return this.getProperty().endDateFieldHelpText;
        }
        return null;
    }
    getEndDateFieldRequired() {
        return this.getProperty().endDateFieldRequired;
    }
    getEndDateFieldVisibility() {
        return this.getProperty().endDateFieldVisibility;
    }
    getExpirationFolderFieldHelpText() {
        if (typeof this.getProperty().expirationFolderFieldHelpText != undefined) {
            return this.getProperty().expirationFolderFieldHelpText;
        }
        return null;
    }
    getExpirationFolderFieldRequired() {
        return this.getProperty().expirationFolderFieldRequired;
    }
    getExpirationFolderFieldVisibility() {
        return this.getProperty().expirationFolderFieldVisibility;
    }
    getKeywordsFieldHelpText() {
        if (typeof this.getProperty().keywordsFieldHelpText != undefined) {
            return this.getProperty().keywordsFieldHelpText;
        }
        return null;
    }
    getKeywordsFieldRequired() {
        return this.getProperty().keywordsFieldRequired;
    }
    getKeywordsFieldVisibility() {
        return this.getProperty().keywordsFieldVisibility;
    }
    getMetadata() {
        let m = AssetTemplate.getMetadata();
        if (typeof this.getProperty().dynamicMetadataFieldDefinitions.dynamicMetadataFieldDefinition != undefined &&
            Array.isArray(this.getProperty().dynamicMetadataFieldDefinitions.dynamicMetadataFieldDefinition)) {
            let defs = this.getProperty().dynamicMetadataFieldDefinitions.dynamicMetadataFieldDefinition;
            let a = new Array;
            defs.forEach(element => {
                let df = {
                    name: element.name,
                    fieldValues: {
                        fieldValue: new Array(),
                    }
                };
                a.push(df);
            });
            m.dynamicFields = {
                dynamicField: a
            };
        }
        let metadata = new Metadata(m, this.getService(), this.getId());
        if (this.hasDynamicMetadataFieldDefinitions()) {
            let dfNames = this.getDynamicMetadataFieldDefinitionNames();
            dfNames.forEach(dfName => {
                let df = this.getDynamicMetadataFieldDefinition(dfName);
                if (df.hasDefaultValue()) {
                    metadata.setDynamicFieldValue(dfName, df.getDefaultValueString());
                }
            });
        }
        return metadata;
    }
    getNonHiddenWiredFieldNames() {
        let fields = new Array();
        if (this.getProperty().authorFieldVisitibility != MetadataSet.HIDDEN) {
            fields.push(MetadataSet.AUTHOR);
        }
        if (this.getProperty().descriptionFieldVisibility != MetadataSet.HIDDEN) {
            fields.push(MetadataSet.DESCRIPTION);
        }
        if (this.getProperty().displayNameFieldVisibility != MetadataSet.HIDDEN) {
            fields.push(MetadataSet.DISPLAYNAME);
        }
        if (this.getProperty().keywordsFieldVisibility != MetadataSet.HIDDEN) {
            fields.push(MetadataSet.KEYWORDS);
        }
        if (this.getProperty().summaryFieldVisibility != MetadataSet.HIDDEN) {
            fields.push(MetadataSet.SUMMARY);
        }
        if (this.getProperty().teaserFieldVisibility != MetadataSet.HIDDEN) {
            fields.push(MetadataSet.TEASER);
        }
        if (this.getProperty().titleFieldVisitibility != MetadataSet.HIDDEN) {
            fields.push(MetadataSet.TITLE);
        }
        return fields;
    }
    getReviewDataFieldHelpText() {
        if (typeof this.getProperty().reviewDateFieldHelpText != undefined) {
            return this.getProperty().reviewDateFieldHelpText;
        }
        return null;
    }
    getReviewDateFieldRequired() {
        return this.getProperty().reviewDateFieldRequired;
    }
    getReviewDateFieldVisibility() {
        return this.getProperty().reviewDateFieldVisibility;
    }
    getStartDateFieldHelpText() {
        if (typeof this.getProperty().startDateFieldHelpText != undefined) {
            return this.getProperty().startDateFieldHelpText;
        }
        return null;
    }
    getStartDateFieldRequired() {
        return this.getProperty().startDateFieldRequired;
    }
    getStartDateFieldVisibility() {
        return this.getProperty().startDateFieldVisibility;
    }
    getSummaryFieldHelpText() {
        if (typeof this.getProperty().summaryFieldHelpText != undefined) {
            return this.getProperty().summaryFieldHelpText;
        }
        return null;
    }
    getSummaryFieldRequired() {
        return this.getProperty().summaryFieldRequired;
    }
    getTeaserFieldHelpText() {
        return this.getProperty().TeaserFieldHelpText;
    }
    getTeaserFieldRequired() {
        return this.getProperty().TeaserFieldRequired;
    }
    getTeaserFieldVisibility() {
        return this.getProperty().TeaserFieldVisibility;
    }
    getTitleFieldHelpText() {
        return this.getProperty().TitleHelpText;
    }
    getTitleFieldRequired() {
        return this.getProperty().TitleRequired;
    }
    getTitleFieldVisibility() {
        return this.getProperty().TitleVisibility;
    }
    hasDynamicMetadataFieldDefinition(name) {
        if (!Array.isArray(__classPrivateFieldGet(this, _MetadataSet_fieldNames, "f"))) {
            return false;
        }
        return __classPrivateFieldGet(this, _MetadataSet_fieldNames, "f").includes(name);
    }
    hasDynamicMetadataFieldDefinitions() {
        return __classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f").length != 0;
    }
    isDynamicMetadataFieldRequired(name) {
        let dfd = this.getDynamicMetadataFieldDefinition(name);
        return dfd.getRequired();
    }
    removeDynamicMetadataFieldDefinition(name) {
        if (!__classPrivateFieldGet(this, _MetadataSet_fieldNames, "f").includes(name)) {
            throw new Error('The Field ' + name + " does not exist");
        }
        let count = __classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f").length;
        for (let i = 0; i < count; i++) {
            if (__classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f")[i].getName() == name) {
                let before = __classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f").slice(0, i);
                let namesBefore = __classPrivateFieldGet(this, _MetadataSet_fieldNames, "f").slice(0, i);
                let after = new Array();
                let namesAfter = new Array();
                if (count - i > 1) {
                    after = __classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f").slice(i + 1);
                    namesAfter = __classPrivateFieldGet(this, _MetadataSet_fieldNames, "f").slice(i + 1);
                }
                __classPrivateFieldSet(this, _MetadataSet_dynamicMetadataFieldDefinitions, before.concat(after), "f");
                __classPrivateFieldSet(this, _MetadataSet_fieldNames, namesBefore.concat(namesAfter), "f");
                break;
            }
        }
        this.edit();
        this.processDynamicMetadataFieldDefinition();
        return this;
    }
    removeField(name) {
        return this.removeDynamicMetadataFieldDefinition(name);
    }
    removeValue(name, value) {
        value = value.trim();
        if (value == '') {
            throw new Error('Empty Value Error');
        }
        let def = this.getDynamicMetadataFieldDefinition(name);
        def.removeValue(value);
        this.edit();
        this.processDynamicMetadataFieldDefinition();
        return this;
    }
    setAuthorFieldHelpText(authorFieldHelpText = "") {
        this.getProperty().authorFieldHelpText = authorFieldHelpText;
        return this;
    }
    setAuthorFieldVisibility(visibility = MetadataSet.HIDDEN) {
        if (!c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable");
        }
        this.getProperty().authorFieldVisibility = visibility;
        return this;
    }
    setDescriptionFieldHelpText(helpText = "") {
        this.getProperty().descriptionFieldHelpText = helpText;
        return this;
    }
    setDescriptionFieldRequired(required) {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean");
        }
        this.getProperty().descriptionFieldRequired = required;
        return this;
    }
    setDescriptionFieldVisibility(visibility = MetadataSet.HIDDEN) {
        if (!c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable");
        }
        this.getProperty().descriptionFieldVisibility = visibility;
        return this;
    }
    setDisplayNameFieldHelpText(helpText = "") {
        this.getProperty().displayNameFieldHelpText = helpText;
        return this;
    }
    setDisplayNameFieldRequired(required) {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean");
        }
        this.getProperty().displayNameFieldRequired = required;
        return this;
    }
    setDisplayNameFieldVisibility(visibility = MetadataSet.HIDDEN) {
        if (!c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable");
        }
        this.getProperty().displayNameFieldVisibility = visibility;
        return this;
    }
    setDynamicMetadataFieldDefinitions(dmfd = null) {
        if (dmfd == null || !(typeof dmfd.DynamicMetadataFieldDefinition != undefined)) {
            this.getProperty().dynamicMetadataFieldDefinitions = {};
        }
        else {
            __classPrivateFieldSet(this, _MetadataSet_dynamicMetadataFieldDefinitions, new Array(), "f");
            __classPrivateFieldSet(this, _MetadataSet_fieldNames, new Array(), "f");
            let defs = dmfd.DynamicMetadataFieldDefinition;
            if (Array.isArray(defs)) {
                defs = new Array(defs);
            }
            let count = defs.length;
            for (let i = 0; i < count; i++) {
                __classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f").push(new DynamicMetadataFieldDefinition(defs[i], this.getService()));
                __classPrivateFieldGet(this, _MetadataSet_fieldNames, "f").push(defs[i].name);
            }
            return this.edit();
        }
    }
    setEndDateFieldHelpText(helpText = "") {
        this.getProperty().endDateFieldHelpText = helpText;
        return this;
    }
    setEndDateFieldRequired(required) {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean");
        }
        this.getProperty().endDateFieldRequired = required;
        return this;
    }
    setEndDateFieldVisibility(visibility = MetadataSet.HIDDEN) {
        if (!c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable");
        }
        this.getProperty().endDateFieldVisibility = visibility;
        return this;
    }
    setExpirationFolderFieldRequired(required) {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean");
        }
        this.getProperty().expirationFolderFieldRequired = required;
        return this;
    }
    setExpirationFolderFieldVisibility(visibility = MetadataSet.HIDDEN) {
        if (!c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable");
        }
        this.getProperty().expirationFolderFieldVisibility = visibility;
        return this;
    }
    setKeywordsFieldHelpText(helpText = "") {
        this.getProperty().keywordsFieldHelpText = helpText;
        return this;
    }
    setKeywordsFieldRequired(required) {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean");
        }
        this.getProperty().keywordsFieldRequired = required;
        return this;
    }
    setKeywordsFieldVisibility(visibility = MetadataSet.HIDDEN) {
        if (!c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable");
        }
        this.getProperty().keywordsFieldVisibility = visibility;
        return this;
    }
    setLabel(name, label) {
        label = label.trim();
        if (label == '') {
            throw new Error('Empty label');
        }
        if (this.getDynamicMetadataFieldDefinition(name)) {
            let d = this.getDynamicMetadataFieldDefinition(name);
            d.setLabel(label);
            return this;
        }
        else {
            throw new Error('The definition ' + name + ' does not exist');
        }
    }
    setRequired(name, required = false) {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + ' must be a boolean');
        }
        if (this.hasDynamicMetadataFieldDefinition(name)) {
            let d = this.getDynamicMetadataFieldDefinition(name);
            d.setRequired(required);
            return this;
        }
        else {
            throw new Error('The definition ' + name + ' does not exist');
        }
    }
    setReviewDateFieldHelpText(helpText = "") {
        this.getProperty().reviewDateFieldHelpText = helpText;
        return this;
    }
    setReviewDateFieldRequired(required) {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean");
        }
        this.getProperty().reviewDateFieldRequired = required;
        return this;
    }
    setReviewDateFieldVisibility(visibility = MetadataSet.HIDDEN) {
        if (!c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable");
        }
        this.getProperty().reviewDateFieldVisibility = visibility;
        return this;
    }
    setSelectedByDefault(name, value) {
        value = value.trim();
        if (value = '') {
            throw new Error('Empty Value');
        }
        if (this.hasDynamicMetadataFieldDefinition(name)) {
            let d = this.getDynamicMetadataFieldDefinition(name);
            if (d.hasPossibleValue(value)) {
                d.setSelectedByDefault(value);
            }
        }
        else {
            throw new Error('the definition ' + name + 'does not exist');
        }
        return this;
    }
    setStartDateFieldHelpText(helpText = "") {
        this.getProperty().startDateFieldHelpText = helpText;
        return this;
    }
    setStartDateFieldRequired(required) {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean");
        }
        this.getProperty().startDateFieldRequired = required;
        return this;
    }
    setStartDateFieldVisibility(visibility = MetadataSet.HIDDEN) {
        if (!c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable");
        }
        this.getProperty().startDateFieldVisibility = visibility;
        return this;
    }
    setSummaryFieldHelpText(helpText = "") {
        this.getProperty().summaryFieldHelpText = helpText;
        return this;
    }
    setSummaryFieldRequired(required) {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean");
        }
        this.getProperty().summaryFieldRequired = required;
        return this;
    }
    setSummaryFieldVisibility(visibility = MetadataSet.HIDDEN) {
        if (!c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable");
        }
        this.getProperty().summaryFieldVisibility = visibility;
        return this;
    }
    setTeaserFieldHelpText(helpText = "") {
        this.getProperty().teaserFieldHelpText = helpText;
        return this;
    }
    setTeaserFieldRequired(required) {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean");
        }
        this.getProperty().teaserFieldRequired = required;
        return this;
    }
    setTeaserFieldVisibility(visibility = MetadataSet.HIDDEN) {
        if (!c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable");
        }
        this.getProperty().teaserFieldVisibility = visibility;
        return this;
    }
    setTitleFieldHelpText(helpText = "") {
        this.getProperty().titleFieldHelpText = helpText;
        return this;
    }
    setTitleFieldRequired(required) {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean");
        }
        this.getProperty().titleFieldRequired = required;
        return this;
    }
    setTitleFieldVisibility(visibility = MetadataSet.HIDDEN) {
        if (!c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable");
        }
        this.getProperty().titleFieldVisibility = visibility;
        return this;
    }
    setVisibility(name, visibility) {
        if (!c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable");
        }
        if (this.hasDynamicMetadataFieldDefinition(name)) {
            let d = this.getDynamicMetadataFieldDefinition(name);
            if (visibility == MetadataSet.VISISBLE || visibility == MetadataSet.INLINE || visibility == MetadataSet.HIDDEN) {
                d.setVisibility(visibility);
                return this;
            }
            else {
                throw new Error("The definition " + name + " does not exist");
            }
        }
        else {
            throw new Error('The definition' + name + " does not exist");
        }
    }
    swapDynamicMetadataFieldDefinitions(value1, value2) {
        if (value1 == '' || value2 == '') {
            throw new Error("Empty value");
        }
        if (!__classPrivateFieldGet(this, _MetadataSet_fieldNames, "f").includes(value1)) {
            throw new Error('The value ' + value1 + ' does not exist');
        }
        if (!__classPrivateFieldGet(this, _MetadataSet_fieldNames, "f").includes(value2)) {
            throw new Error('The value ' + value2 + ' does not exist');
        }
        let firstPvPos = -1;
        let secondPvPos = -1;
        let count = __classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f").length;
        for (let i = 0; i < i; i++) {
            if (__classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f")[i].getName() == value1) {
                firstPvPos = i;
            }
            if (__classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f")[i].getName() == value2) {
                secondPvPos = i;
            }
        }
        let tempVal = __classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f")[firstPvPos];
        __classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f")[firstPvPos] = __classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f")[secondPvPos];
        __classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f")[secondPvPos] = tempVal;
        this.edit();
        this.processDynamicMetadataFieldDefinition();
        return this;
    }
    swapFields(def1, def2) {
        return this.swapDynamicMetadataFieldDefinitions(def1, def2);
    }
    swapValues(name, value1, value2) {
        let def = this.getDynamicMetadataFieldDefinition(name);
        def.swapValues(value1, value2);
        this.edit();
        this.processDynamicMetadataFieldDefinition();
        return this;
    }
    unsetSelectedByDefault(name, value) {
        value = value.trim();
        if (value == '') {
            throw new Error('Empty value');
        }
        if (this.hasDynamicMetadataFieldDefinition(name)) {
            let d = this.getDynamicMetadataFieldDefinition(name);
            if (d.hasPossibleValue(value)) {
                d.unsetSelectedByDefault(value);
            }
        }
        else {
            throw new Error('The definition ' + name + " does not exist");
        }
        return this;
    }
    processDynamicMetadataFieldDefinition() {
        __classPrivateFieldSet(this, _MetadataSet_dynamicMetadataFieldDefinitions, new Array(), "f");
        __classPrivateFieldSet(this, _MetadataSet_fieldNames, new Array(), "f");
        let definitions = this.getProperty().dynamicMetadataFieldDefinitions;
        if (!Array.isArray(definitions)) {
            definitions = new Array(definitions);
        }
        let count = definitions.length;
        for (let i = 0; i < count; i++) {
            __classPrivateFieldGet(this, _MetadataSet_dynamicMetadataFieldDefinitions, "f").push(new DynamicMetadataFieldDefinition(definitions[i], this.getService()));
            __classPrivateFieldGet(this, _MetadataSet_fieldNames, "f").push(definitions[i].name);
        }
    }
}
_MetadataSet_dynamicMetadataFieldDefinitions = new WeakMap(), _MetadataSet_fieldNames = new WeakMap();
MetadataSet.wired = ["author", "description", "displayName", "endDate", "expirationFolder", "keywords", "reviewDate", "startDate", "summary", "teaser", "title"];
MetadataSet.TYPE = c.TYPES.METADATASET;
MetadataSet.HIDDEN = c.TYPES.HIDDEN;
MetadataSet.INLINE = c.TYPES.INLINE;
MetadataSet.VISISBLE = c.TYPES.VISIBLE;
MetadataSet.AUTHOR = "author";
MetadataSet.DESCRIPTION = "description";
MetadataSet.DISPLAYNAME = "display-name";
MetadataSet.KEYWORDS = "keywords";
MetadataSet.SUMMARY = "summary";
MetadataSet.TEASER = "teaser";
MetadataSet.TITLE = "title";
//# sourceMappingURL=MetadataSet.js.map