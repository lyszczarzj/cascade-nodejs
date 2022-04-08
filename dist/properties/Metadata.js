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
var _Metadata_author, _Metadata_displayName, _Metadata_endDate, _Metadata_keywords, _Metadata_metaDescription, _Metadata_reviewDate, _Metadata_startDate, _Metadata_summary, _Metadata_teaser, _Metadata_title, _Metadata_dynamicFields, _Metadata_dynamicFieldNames, _Metadata_service, _Metadata_metadataSetId, _Metadata_hostAsset;
import { Property, MetadataSet, DynamicField, c } from "../internal.js";
export default class Metadata extends Property {
    constructor(obj, service = null, metadataSetId = null, data2 = null, data3 = null) {
        super(obj, service, metadataSetId, data2, data3);
        _Metadata_author.set(this, void 0);
        _Metadata_displayName.set(this, void 0);
        _Metadata_endDate.set(this, void 0);
        _Metadata_keywords.set(this, void 0);
        _Metadata_metaDescription.set(this, void 0);
        _Metadata_reviewDate.set(this, void 0);
        _Metadata_startDate.set(this, void 0);
        _Metadata_summary.set(this, void 0);
        _Metadata_teaser.set(this, void 0);
        _Metadata_title.set(this, void 0);
        _Metadata_dynamicFields.set(this, void 0);
        _Metadata_dynamicFieldNames.set(this, void 0);
        _Metadata_service.set(this, void 0);
        _Metadata_metadataSetId.set(this, void 0);
        _Metadata_hostAsset.set(this, void 0);
        if (service == null) {
            throw new Error("NULL SERVICE");
        }
        __classPrivateFieldSet(this, _Metadata_service, service, "f");
        if (typeof obj != undefined) {
            if (!(typeof obj.author === 'undefined' || obj.author === null)) {
                __classPrivateFieldSet(this, _Metadata_author, obj.author, "f");
            }
            if (!(typeof obj.displayName === 'undefined' || obj.displayName === null)) {
                __classPrivateFieldSet(this, _Metadata_displayName, obj.displayName, "f");
            }
            if (!(typeof obj.endDate === 'undefined' || obj.endDate === null)) {
                __classPrivateFieldSet(this, _Metadata_endDate, obj.endDate, "f");
            }
            if (!(typeof obj.keywords === 'undefined' || obj.keywords === null)) {
                __classPrivateFieldSet(this, _Metadata_keywords, obj.keywords, "f");
            }
            if (!(typeof obj.metaDescription === 'undefined' || obj.metaDescription === null)) {
                __classPrivateFieldSet(this, _Metadata_metaDescription, obj.metaDescription, "f");
            }
            if (!(typeof obj.reviewDate === 'undefined' || obj.reviewDate === null)) {
                __classPrivateFieldSet(this, _Metadata_reviewDate, obj.reviewDate, "f");
            }
            if (!(typeof obj.startDate === 'undefined' || obj.startDate === null)) {
                __classPrivateFieldSet(this, _Metadata_startDate, obj.startDate, "f");
            }
            if (!(typeof obj.summary === 'undefined' || obj.summary === null)) {
                __classPrivateFieldSet(this, _Metadata_summary, obj.summary, "f");
            }
            if (!(typeof obj.title === 'undefined' || obj.title === null)) {
                __classPrivateFieldSet(this, _Metadata_title, obj.title, "f");
            }
            this.metadataSet = null;
            if (typeof metadataSetId !== undefined && metadataSetId !== null) {
                __classPrivateFieldSet(this, _Metadata_metadataSetId, metadataSetId, "f");
            }
            __classPrivateFieldSet(this, _Metadata_dynamicFieldNames, new Array(), "f");
            if (typeof obj.dynamicFields !== undefined && obj.dynamicFields !== null) {
                this.processDynamicFields(obj.dynamicFields);
            }
            __classPrivateFieldSet(this, _Metadata_hostAsset, data2, "f");
        }
    }
    getAuthor() {
        return __classPrivateFieldGet(this, _Metadata_author, "f");
    }
    getDisplayName() {
        return __classPrivateFieldGet(this, _Metadata_displayName, "f");
    }
    getDynamicField(name) {
        name = name.trim();
        if (name == '') {
            throw new Error('empty name');
        }
        let result = __classPrivateFieldGet(this, _Metadata_dynamicFields, "f").find(element => {
            element.getName() == name;
        });
        if (typeof result !== undefined && result !== null) {
            return result;
        }
        else {
            throw new Error('The dynamic field ' + name + ' does not exist');
        }
    }
    getDynamicFieldNames() {
        return __classPrivateFieldGet(this, _Metadata_dynamicFieldNames, "f");
    }
    getDynamicFieldPossibleValues(name) {
        return this.getMetadataSet().getDynamicMetadataFieldPossibleValueStrings(name);
    }
    getDynamicFields() {
        return __classPrivateFieldGet(this, _Metadata_dynamicFields, "f");
    }
    getDynamicFieldValues(name) {
        name = name.trim();
        if (name == '') {
            throw new Error('Empty name');
        }
        let field = this.getDynamicField(name);
        return field.getFieldValue().getValues();
    }
    getEndDate() {
        return __classPrivateFieldGet(this, _Metadata_endDate, "f");
    }
    getHostAsset() {
        return __classPrivateFieldGet(this, _Metadata_hostAsset, "f");
    }
    getKeywords() {
        __classPrivateFieldGet(this, _Metadata_keywords, "f");
    }
    getMetadataSet() {
        if (this.metadataSet == null) {
            this.metadataSet = new MetadataSet(__classPrivateFieldGet(this, _Metadata_service, "f"), __classPrivateFieldGet(this, _Metadata_service, "f").createId(MetadataSet.TYPE, __classPrivateFieldGet(this, _Metadata_metadataSetId, "f")));
        }
        return this.metadataSet;
    }
    getMetaDescription() {
        return __classPrivateFieldGet(this, _Metadata_metaDescription, "f");
    }
    getReviewDate() {
        return __classPrivateFieldGet(this, _Metadata_reviewDate, "f");
    }
    getStartDate() {
        return __classPrivateFieldGet(this, _Metadata_startDate, "f");
    }
    getSummary() {
        return __classPrivateFieldGet(this, _Metadata_summary, "f");
    }
    getTeaser() {
        return __classPrivateFieldGet(this, _Metadata_teaser, "f");
    }
    getTitle() {
        return __classPrivateFieldGet(this, _Metadata_title, "f");
    }
    getMetadataValues() {
        const values = {
            "author": this.getAuthor(),
            "displayName": this.getDisplayName(),
            "endDate": this.getEndDate(),
            "keywords": this.getKeywords(),
            "metaDescription": this.getMetaDescription(),
            "reviewDate": this.getReviewDate(),
            "startDate": this.getStartDate(),
            "summary": this.getSummary(),
            "teaser": this.getTeaser(),
            "title": this.getTitle()
        };
        this.getDynamicFieldNames().forEach(field => {
            var dynamicValues = this.getDynamicFieldValues(field);
            if (dynamicValues.length == 1 && dynamicValues[0] === null) {
                dynamicValues = null;
            }
            values[field] = dynamicValues;
        });
        return values;
    }
    getValues(name) {
        return this.getDynamicFieldValues(name);
    }
    hasDynamicField(name) {
        if (name == '') {
            throw new Error("Empty Name");
        }
        if (typeof __classPrivateFieldGet(this, _Metadata_dynamicFieldNames, "f") == undefined) {
            return false;
        }
        return __classPrivateFieldGet(this, _Metadata_dynamicFieldNames, "f").includes(name);
    }
    hasDynamicFields() {
        return __classPrivateFieldGet(this, _Metadata_dynamicFieldNames, "f").length > 0;
    }
    hasPossibleValue(fieldName, value) {
        return this.isPossibleValue(fieldName, value);
    }
    isAuthorFieldRequired() {
        this.checkMetadataSet();
        return this.metadataSet.getAuthorFieldRequired();
    }
    isDescriptionFieldRequired() {
        return this.metadataSet.getDescriptionFieldRequired();
    }
    isDynamicFieldRequired(name) {
        return this.isDynamicMetadataFieldRequired(name);
    }
    isDynamicMetadataFieldRequired(name) {
        this.checkMetadataSet();
        return this.metadataSet.isDynamicMetadataFieldRequired(name);
    }
    isDisplayNameRequired() {
        this.checkMetadataSet();
        return this.metadataSet.getDisplayNameFieldRequired();
    }
    isEndDateFieldRequired() {
        this.checkMetadataSet();
        return this.metadataSet.getEndDateFieldRequired();
    }
    isExpirationFolderFieldRequired() {
        this.checkMetadataSet();
        return this.metadataSet.getExpirationFolderFieldRequired();
    }
    isKeywordsFieldRequired() {
        this.checkMetadataSet();
        return this.metadataSet.getKeywordsFieldRequired();
    }
    isMetaDescriptionFieldRequired() {
        this.checkMetadataSet();
        return this.metadataSet.getDescriptionFieldRequired();
    }
    isPossibleValue(fieldName, value) {
        let values = this.getDynamicFieldValues(fieldName);
        return values.includes(value);
    }
    isReviewDateFieldRequired() {
        this.checkMetadataSet();
        return this.metadataSet.getReviewDateFieldRequired();
    }
    isStartDateFieldRequired() {
        this.checkMetadataSet();
        return this.metadataSet.getStartDateFieldRequired();
    }
    isSummaryFieldRequired() {
        this.checkMetadataSet();
        return this.metadataSet.getSummaryFieldRequired();
    }
    isTeaserFieldRequired() {
        this.checkMetadataSet();
        return this.metadataSet.getTeaserFieldRequired();
    }
    isTitleFieldRequired() {
        this.checkMetadataSet();
        return this.metadataSet.getTitleFieldRequired();
    }
    setAuthor(author = null) {
        author = author.trim();
        this.checkMetadataSet();
        if (this.metadataSet.getAuthorFieldRequired() && author == '') {
            throw new Error('The author field is required');
        }
        __classPrivateFieldSet(this, _Metadata_author, author, "f");
        return this;
    }
    setDisplayName(displayName = null) {
        displayName = displayName.trim();
        this.checkMetadataSet();
        if (this.metadataSet.getDisplayNameFieldRequired() && displayName == '') {
            throw new Error('The displayName field is required');
        }
        __classPrivateFieldSet(this, _Metadata_displayName, displayName, "f");
        return this;
    }
    toObject() {
        const obj = {
            author: __classPrivateFieldGet(this, _Metadata_author, "f"),
            displayName: __classPrivateFieldGet(this, _Metadata_displayName, "f"),
            endDate: __classPrivateFieldGet(this, _Metadata_endDate, "f"),
            keywords: __classPrivateFieldGet(this, _Metadata_keywords, "f"),
            metaDescription: __classPrivateFieldGet(this, _Metadata_metaDescription, "f"),
            reviewDate: __classPrivateFieldGet(this, _Metadata_reviewDate, "f"),
            startDate: __classPrivateFieldGet(this, _Metadata_startDate, "f"),
            summary: __classPrivateFieldGet(this, _Metadata_summary, "f"),
            teaser: __classPrivateFieldGet(this, _Metadata_teaser, "f"),
            obj: __classPrivateFieldGet(this, _Metadata_title, "f"),
            dynamicFields: ""
        };
        let count = 0;
        if (typeof __classPrivateFieldGet(this, _Metadata_dynamicFields, "f") !== undefined) {
            count = __classPrivateFieldGet(this, _Metadata_dynamicFields, "f").length;
        }
        if (count == 0) {
            obj['dynamicFields'] = null;
        }
        else if (count == 1) {
            obj.dynamicFields = new Array(__classPrivateFieldGet(this, _Metadata_dynamicFields, "f")[0].toObject());
        }
        else {
            obj.dynamicFields = new Array();
        }
        for (let i = 0; i < count; i++) {
            obj.dynamicFields.push(__classPrivateFieldGet(this, _Metadata_dynamicFields, "f")[i].toObject());
        }
        return obj;
    }
    setDynamicFieldValue(field, values = null) {
        if (values == '') {
            values = null;
        }
        if (!Array.isArray(values)) {
            values = new Array(values);
        }
        let vCount = values.length;
        this.checkMetadataSet();
        let dfDef = this.metadataSet.getDynamicMetadataFieldDefinition(field);
        let fieldType = dfDef.getFieldType();
        let required = dfDef.getRequired();
        let df = this.getDynamicField(field);
        if (fieldType == c.TYPES.TEXT && vCount == 1) {
            let value = values[0];
            if (value == null) {
                value = '';
            }
            if (required && value == '') {
                throw new Error('the ' + fieldType + ' requires non-empty value');
            }
            let v = {
                value: value
            };
            df.setValue(new Array(v));
        }
        else if ((fieldType == c.TYPES.RADIO || fieldType == c.TYPES.DROPDOWN) && vCount == 1) {
            let value = values[0];
            if (value == '') {
                value = null;
            }
            if (required && value == null) {
                throw new Error('The ' + fieldType + ' required non-empty value');
            }
            let possibleValues = dfDef.getPossibleValueStrings();
            if (!possibleValues.includes(value) && value !== null) {
                throw new Error("The value " + value + " does not exist");
            }
            let v = {
                value: value
            };
            df.setValue(new Array(v));
        }
        else if ((fieldType == c.TYPES.CHECKBOX || fieldType == c.TYPES.MULTISELECT) && vCount > 0) {
            if (required && values.includes(null) || values.includes("")) {
                throw new Error('requires non-empty value');
            }
            let possibleValues = dfDef.getPossibleValueStrings();
            values.forEach(value => {
                if (!possibleValues.includes(value) && typeof value !== undefined) {
                    throw new Error('The value does not exist');
                }
            });
            let vArray = new Array();
            values.forEach(value => {
                let v = {
                    value: value,
                };
                vArray.push(v);
            });
            df.setValue(vArray);
        }
        return this;
    }
    checkMetadataSet() {
        if (this.metadataSet == null) {
            this.metadataSet = new MetadataSet(__classPrivateFieldGet(this, _Metadata_service, "f"), __classPrivateFieldGet(this, _Metadata_service, "f").createId(MetadataSet.TYPE, __classPrivateFieldGet(this, _Metadata_metadataSetId, "f")));
        }
    }
    processDynamicFields(fields) {
        __classPrivateFieldSet(this, _Metadata_dynamicFields, new Array(), "f");
        if (!Array.isArray(fields)) {
            fields = new Array(fields);
        }
        fields.forEach(field => {
            let df = new DynamicField(field, __classPrivateFieldGet(this, _Metadata_service, "f"));
            __classPrivateFieldGet(this, _Metadata_dynamicFields, "f").push(df);
            __classPrivateFieldGet(this, _Metadata_dynamicFieldNames, "f").push(field.name);
        });
    }
}
_Metadata_author = new WeakMap(), _Metadata_displayName = new WeakMap(), _Metadata_endDate = new WeakMap(), _Metadata_keywords = new WeakMap(), _Metadata_metaDescription = new WeakMap(), _Metadata_reviewDate = new WeakMap(), _Metadata_startDate = new WeakMap(), _Metadata_summary = new WeakMap(), _Metadata_teaser = new WeakMap(), _Metadata_title = new WeakMap(), _Metadata_dynamicFields = new WeakMap(), _Metadata_dynamicFieldNames = new WeakMap(), _Metadata_service = new WeakMap(), _Metadata_metadataSetId = new WeakMap(), _Metadata_hostAsset = new WeakMap();
Metadata.wiredFields = ["author", "displayName", "endDate", "keywords", "metaDescription",
    "reviewDate", "startDate", "summary", "teaser", "title"];
//# sourceMappingURL=Metadata.js.map