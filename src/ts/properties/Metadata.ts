// import Asset from "../assets/Asset.js"
// import MetadataSet from "../assets/MetadataSet.js"
// import RequestService from "../RequestService.js"
// import DynamicField from "./DynamicField.js"
// import Property from "./Property.js"
// import * as c from "../constants.js"
// import PossibleValue from "./PossibleValue.js"

import {Property, RequestService, Asset, MetadataSet, DynamicField, c} from "../internal.js"

export default class Metadata extends Property {
    #author: string
    #displayName: string
    #endDate: string
    #keywords: string
    #metaDescription: string
    #reviewDate: string
    #startDate: string
    #summary: string
    #teaser: string
    #title: string
    #dynamicFields: Array<DynamicField>
    #dynamicFieldNames: any
    #service: RequestService
    #metadataSetId: string
    #hostAsset: Asset
    metadataSet: MetadataSet
    static wiredFields = ["author", "displayName", "endDate", "keywords", "metaDescription", 
    "reviewDate","startDate", "summary", "teaser", "title"];
    constructor(obj: any, service: RequestService = null, metadataSetId: any = null, data2: any = null, data3: any = null) {
        super(obj, service, metadataSetId, data2, data3)
        if (service == null) {
            throw new Error("NULL SERVICE")
        }

        this.#service = service;

        if (typeof obj != undefined) {
            if (!(typeof obj.author === 'undefined' || obj.author === null)) {
                this.#author = obj.author; 
            }
            if (!(typeof obj.displayName === 'undefined' || obj.displayName === null)) {
                this.#displayName = obj.displayName; 
            }
            if (!(typeof obj.endDate === 'undefined' || obj.endDate === null)) {
                this.#endDate = obj.endDate; 
            }
            if (!(typeof obj.keywords === 'undefined' || obj.keywords === null)) {
                this.#keywords = obj.keywords; 
            }
            if (!(typeof obj.metaDescription === 'undefined' || obj.metaDescription === null)) {
                this.#metaDescription = obj.metaDescription; 
            }
            if (!(typeof obj.reviewDate === 'undefined' || obj.reviewDate === null)) {
                this.#reviewDate = obj.reviewDate; 
            }
            if (!(typeof obj.startDate === 'undefined' || obj.startDate === null)) {
                this.#startDate = obj.startDate; 
            }
            if (!(typeof obj.summary === 'undefined' || obj.summary === null)) {
                this.#summary = obj.summary; 
            }
            if (!(typeof obj.title === 'undefined' || obj.title === null)) {
                this.#title = obj.title; 
            }
            this.metadataSet = null;

            if (typeof metadataSetId !== undefined && metadataSetId !== null) {
                this.#metadataSetId = metadataSetId;
            }
            this.#dynamicFieldNames = new Array();

            if(typeof obj.dynamicFields !== undefined && obj.dynamicFields !== null) {
                this.processDynamicFields(obj.dynamicFields);
            }
            this.#hostAsset = data2;
        }
    }
    getAuthor() {
        return this.#author;
    }
    getDisplayName() {
        return this.#displayName;
    }
    getDynamicField(name:string): DynamicField {
        name = name.trim();

        if (name == '') {
            throw new Error ('empty name')
        }

        let result = this.#dynamicFields.find(element => {
            element.getName() == name
        })

        if (typeof result !== undefined && result !== null) {
            return result
        } else {
            throw new Error('The dynamic field ' + name + ' does not exist');
        }
    }
    getDynamicFieldNames(): string[] {
        return this.#dynamicFieldNames;
    }
    getDynamicFieldPossibleValues(name: string): string | string[] {
        return this.getMetadataSet().getDynamicMetadataFieldPossibleValueStrings(name);
    }
    getDynamicFields() {
        return this.#dynamicFields;
    }
    getDynamicFieldValues(name: string): string[] {
        name = name.trim();

        if(name == '') {
            throw new Error('Empty name')
        }

        let field = this.getDynamicField(name);

        return field.getFieldValue().getValues();
    } 

    getEndDate() {
        return this.#endDate;
    }
    getHostAsset(): Asset {
        return this.#hostAsset;
    }
    getKeywords() {
        this.#keywords
    }
    getMetadataSet(): MetadataSet {
        if (this.metadataSet == null) {
            this.metadataSet = new MetadataSet(this.#service, this.#service.createId(MetadataSet.TYPE, this.#metadataSetId))
        }
        return this.metadataSet;
    }
    getMetaDescription() {
        return this.#metaDescription;
    }
    getReviewDate() {
        return this.#reviewDate;
    }
    getStartDate() {
        return this.#startDate;
    }
    getSummary() {
        return this.#summary;
    }
    getTeaser() {
        return this.#teaser;
    }
    getTitle() {
        return this.#title;
    }
    //this method incorrect in original code?
    getMetadataValues(): any {
    interface Values {
        [author:string]: any}

        const values: Values = {
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
        }

        this.getDynamicFieldNames().forEach(field => {
            var dynamicValues = this.getDynamicFieldValues(field)

            if (dynamicValues.length == 1 && dynamicValues[0] === null) {
                dynamicValues = null;
            }
            values[field] = dynamicValues;
        })
        return values;
    }
    getValues(name:string): string[] {
        return this.getDynamicFieldValues(name);
    }
    hasDynamicField(name: string): boolean {
        if(name == '') {
            throw new Error("Empty Name");
        }
        if(typeof this.#dynamicFieldNames == undefined) {
            return false;
        }
        return this.#dynamicFieldNames.includes(name);
    }
    hasDynamicFields(): boolean {
        return this.#dynamicFieldNames.length > 0;
    }
    hasPossibleValue(fieldName: string, value:string) : boolean {
        return this.isPossibleValue(fieldName, value);
    }
    isAuthorFieldRequired(): boolean {
        this.checkMetadataSet();
        return this.metadataSet.getAuthorFieldRequired();
    }
    isDescriptionFieldRequired(): boolean {
        return this.metadataSet.getDescriptionFieldRequired();
    }
    isDynamicFieldRequired(name: string): boolean {
        return this.isDynamicMetadataFieldRequired(name);
    }
    isDynamicMetadataFieldRequired(name: string): boolean {
        this.checkMetadataSet();
        return this.metadataSet.isDynamicMetadataFieldRequired(name);
    }
    isDisplayNameRequired(): boolean {
        this.checkMetadataSet();
        return this.metadataSet.getDisplayNameFieldRequired();
    }
    isEndDateFieldRequired(): boolean {
        this.checkMetadataSet();
        return this.metadataSet.getEndDateFieldRequired();
    }
    isExpirationFolderFieldRequired() : boolean
    {
        this.checkMetadataSet();
        return this.metadataSet.getExpirationFolderFieldRequired();      
    }
    isKeywordsFieldRequired(): boolean {
        this.checkMetadataSet();
        return this.metadataSet.getKeywordsFieldRequired();
    }
    isMetaDescriptionFieldRequired(): boolean {
        this.checkMetadataSet();
        return this.metadataSet.getDescriptionFieldRequired();
    }
    isPossibleValue(fieldName: string, value: string):boolean {
        let values = this.getDynamicFieldValues(fieldName);
        return  values.includes(value);
    }
    isReviewDateFieldRequired(): boolean {
        this.checkMetadataSet();
        return this.metadataSet.getReviewDateFieldRequired();
    }
    isStartDateFieldRequired(): boolean {
        this.checkMetadataSet();
        return this.metadataSet.getStartDateFieldRequired();
    }
    isSummaryFieldRequired(): boolean {
        this.checkMetadataSet();
        return this.metadataSet.getSummaryFieldRequired();
    }
    isTeaserFieldRequired(): boolean {
        this.checkMetadataSet();
        return this.metadataSet.getTeaserFieldRequired();
    }
    isTitleFieldRequired(): boolean {
        this.checkMetadataSet();
        return this.metadataSet.getTitleFieldRequired();
    }
    setAuthor(author:string = null): Property {
        author = author.trim();
        this.checkMetadataSet();

        if (this.metadataSet.getAuthorFieldRequired() && author == '') {
            throw new Error('The author field is required')
        }

        this.#author = author;
        return this;
    }
    setDisplayName(displayName: string =  null): Property {
        displayName = displayName.trim();

        this.checkMetadataSet();

        if (this.metadataSet.getDisplayNameFieldRequired() && displayName == '') {
            throw new Error('The displayName field is required')
        }

        this.#displayName = displayName;
        return this;

    }
    toObject() {
        const obj: any = {
            author: this.#author,
            displayName: this.#displayName,
            endDate: this.#endDate,
            keywords: this.#keywords,
            metaDescription: this.#metaDescription,
            reviewDate: this.#reviewDate,
            startDate: this.#startDate,
            summary: this.#summary,
            teaser: this.#teaser,
            obj: this.#title,
            dynamicFields: ""
        }
        let count = 0

        if (typeof this.#dynamicFields !== undefined) {
            count = this.#dynamicFields.length
        }
        if (count == 0) {
            obj['dynamicFields'] = null
        } else if (count == 1) {
            obj.dynamicFields = new Array(this.#dynamicFields[0].toObject())
        } else {
            obj.dynamicFields = new Array();
        }

        for (let i = 0;i<count;i++) {
            obj.dynamicFields.push(this.#dynamicFields[i].toObject())
        }

        return obj;
    }
    setDynamicFieldValue(field: string, values: Array<string>|null|string = null): Property {
        if (values == '') {
            values = null;
        }
        if (!Array.isArray(values)) {
            values = new Array(values)
        }
        let vCount = values.length;
        this.checkMetadataSet();

        let dfDef = this.metadataSet.getDynamicMetadataFieldDefinition(field);
        let fieldType = dfDef.getFieldType();
        let required = dfDef.getRequired();
        let df = this.getDynamicField(field);

        if(fieldType == c.TYPES.TEXT && vCount == 1) {
            let value = values[0];

            if (value == null) {
                value = '';
            }

            if (required && value == '') {
                throw new Error('the ' + fieldType + ' requires non-empty value')
            }

            let v = {
                value: value
            }

            df.setValue(new Array(v))
        } else if ((fieldType == c.TYPES.RADIO || fieldType == c.TYPES.DROPDOWN) && vCount == 1) {
            let value = values[0];

            if (value == '') {
                value = null;
            }

            if (required && value == null) {
                throw new Error('The ' + fieldType + ' required non-empty value')
            }
            let possibleValues = dfDef.getPossibleValueStrings();
            if(!possibleValues.includes(value) && value !== null) {
                throw new Error("The value " + value + " does not exist");
            }

            let v = {
                value: value
            }

            df.setValue(new Array(v));
        } else if ((fieldType == c.TYPES.CHECKBOX || fieldType == c.TYPES.MULTISELECT) && vCount > 0) {
            if (required && values.includes(null) || values.includes("")) {
                throw new Error('requires non-empty value')
            }
            let possibleValues = dfDef.getPossibleValueStrings();

            values.forEach(value => {
                if (!possibleValues.includes(value) && typeof value !== undefined) {
                    throw new Error ('The value does not exist');
                }
            })

            let vArray = new Array();

            values.forEach(value => {
                let v = {
                    value: value,
                }
                vArray.push(v);
            })
            df.setValue(vArray);
        }
        return this;
    }

    private checkMetadataSet() {
        if (this.metadataSet == null) {
            this.metadataSet = new MetadataSet(this.#service, this.#service.createId(MetadataSet.TYPE, this.#metadataSetId))
        }
    }
    private processDynamicFields(fields: Array<any> ) {
        this.#dynamicFields = new Array();

        if (!Array.isArray(fields)) {
            fields = new Array(fields);
        }

        fields.forEach(field => {
            let df = new DynamicField(field,this.#service);
            this.#dynamicFields.push(df);
            this.#dynamicFieldNames.push(field.name); 
        })
    }


}