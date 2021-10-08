import RequestService from "../RequestService.js";
import ContainedAsset from "./ContainedAsset.js";
import * as Struct from "../struct.js";
import * as c from "../constants.js"
import Asset from "./Asset.js";
import AssetTemplate from "./AssetTemplate.js";
import DynamicMetadataFieldDefinition from "../properties/DynamicMetadataFieldDefinition.js";
import Property from "../properties/Property.js";
import Metadata from "../properties/Metadata.js";

export default class MetadataSet extends ContainedAsset {
    static wired: Array<string> = ["author", "description", "displayName", "endDate", "expirationFolder", "keywords", "reviewDate", "startDate", "summary", "teaser", "title"];
    static TYPE: string = c.TYPES.METADATASET;
    static HIDDEN: string = c.TYPES.HIDDEN;
    static INLINE: string = c.TYPES.INLINE;
    static VISISBLE: string = c.TYPES.VISIBLE;
    static AUTHOR: string = "author";
    static DESCRIPTION: string = "description";
    static DISPLAYNAME: string = "display-name";
    static KEYWORDS: string = "keywords";
    static SUMMARY: string = "summary";
    static TEASER: string = "teaser";
    static TITLE: string = "title";

    #dynamicMetadataFieldDefinitions: DynamicMetadataFieldDefinition[]
    #fieldNames: Array<string>



    constructor(service: RequestService, identifier: Struct.Identifier) {
        super(service, identifier);
        if (typeof this.getProperty().dynamicMetadataFieldDefinitions != undefined) {
            this.processDynamicMetadataFieldDefinition();
        }
    }

    addDynamicFieldDefinition(
        fieldName: string,
        type: string, label: string,
        required: boolean = false,
        visibility: string = c.TYPES.VISIBLE,
        possibleValues: string = "",
        helpText: string = ""): Asset {
        if (this.hasDynamicMetadataFieldDefinition(fieldName)) {
            throw new Error(`The Dynamic Field Definition ${fieldName} already exists`)
        }
        if (type != c.TYPES.TEXT && possibleValues.trim() != "") {
            throw new Error('empty possible values')
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
            //CHECK THIS LATER
            let values = possibleValues.split(";");
            let valueCount: number = values.length;

            if (valueCount == 1) {
                let pv = {
                    value: values[0],
                    selectedByDefault: false,
                }

                dmfd.dynamicMetadataFieldDefinition.possibleValues.push(pv);
            } else {
                values.forEach((value) => {
                    let pv = {
                        value: value,
                        selectedByDefault: false
                    }

                    dmfd.dynamicMetadataFieldDefinition.possibleValues.push(pv);
                })
            }

            let dmfdObj = new DynamicMetadataFieldDefinition(dmfd.dynamicMetadataFieldDefinition, this.getService());

            this.#dynamicMetadataFieldDefinitions.push(dmfdObj);

            this.edit();
            this.processDynamicMetadataFieldDefinition();

            return this;
        }
    }
    addField(fieldName: string,
        type: string,
        label: string,
        required: boolean = false,
        visibility: string = c.TYPES.VISIBLE,
        possibleValues: string = "",
        helpText: string = ""): Asset {

        return this.addDynamicFieldDefinition(fieldName, type, label, required, visibility, possibleValues, helpText)
    }
    appendValue(name: string, value: string): Asset {
        value = value.trim();

        if (value == '') {
            throw new Error('Empty Value')
        }

        let def = this.getDynamicMetadataFieldDefinition(name);
        def.appendValue(value);
        this.edit();
        this.processDynamicMetadataFieldDefinition();

        return this;

    }
    //edit later
    edit(wf: any = null, wd: any = null, newWorkflowName: string = "", comment: string = "", exception: boolean = true): any {
        console.log("Should edit the asset here!")
        return;
    }
    getAuthorFieldRequired(): boolean {
        return this.getProperty().authorFieldRequired;
    }
    getAuthorFieldVisibility(): string {
        return this.getProperty().authorFieldVisibility;
    }
    getDescriptionFieldHelpText() {
        if (typeof this.getProperty().descriptionFieldHelpText != undefined)
            return this.getProperty().descriptionFieldHelpText;
        return null;
    }
    getDescriptionFieldRequired(): boolean {
        return this.getProperty().descriptionFieldRequired;
    }
    getDescriptionFieldVisibility(): string {
        return this.getProperty().descriptionFieldVisibility;
    }
    getDisplayNameFieldHelpText() {
        if (typeof this.getProperty().displayNameFieldHelpText != undefined)
            return this.getProperty().displayNameFieldHelpText;
        return null;
    }
    getDisplayNameFieldRequired(): boolean {
        return this.getProperty().displayNameFieldRequired;
    }
    getDisplayNameFieldVisibility(): string {
        return this.getProperty().displayNameFieldVisibility;
    }
    getDynamicMetadataFieldDefinition(name: string): DynamicMetadataFieldDefinition {
        if (!this.hasDynamicMetadataFieldDefinition(name)) {
            throw new Error("The definition " + name + " does not exist.")
        }
        return this.#dynamicMetadataFieldDefinitions.find(element => {
            element.getName() == name 
        })

    }
    getDynamicMetadataFieldDefinitionNames(): Array<string> {
        return this.#fieldNames;
    }
    getDynamicMetadataFieldDefinitionsStdClass() {
        return this.getProperty().dynamicMetadataFieldDefinitions;
    }
    getDynamicMetadataFieldPossibleValueStrings(name: string): string | Array<string> {
        if (!this.hasDynamicMetadataFieldDefinition(name))
            throw new Error('The definition does not exist ');

        let element = this.#dynamicMetadataFieldDefinitions.find(element => element.getName() == name) 

        return element.getPossibleValueStrings();
    }
    getEndDateFieldHelpText() {
        if (typeof this.getProperty().endDateFieldHelpText != undefined) {
            return this.getProperty().endDateFieldHelpText;
        }
        return null;
    }
    getEndDateFieldRequired(): boolean {
        return this.getProperty().endDateFieldRequired;
    }
    getEndDateFieldVisibility(): string {
        return this.getProperty().endDateFieldVisibility;
    }
    getExpirationFolderFieldHelpText() {
        if (typeof this.getProperty().expirationFolderFieldHelpText != undefined) {
            return this.getProperty().expirationFolderFieldHelpText;
        }
        return null;
    }
    getExpirationFolderFieldRequired(): boolean {
        return this.getProperty().expirationFolderFieldRequired;
    }
    getExpirationFolderFieldVisibility(): string {
        return this.getProperty().expirationFolderFieldVisibility;
    }
    getKeywordsFieldHelpText() {
        if (typeof this.getProperty().keywordsFieldHelpText != undefined) {
            return this.getProperty().keywordsFieldHelpText;
        }
        return null;
    }
    getKeywordsFieldRequired(): boolean {
        return this.getProperty().keywordsFieldRequired;
    }
    getKeywordsFieldVisibility(): string {
        return this.getProperty().keywordsFieldVisibility;
    }
    getMetadata(): Property {
        let m = AssetTemplate.getMetadata();

        if (typeof this.getProperty().dynamicMetadataFieldDefinitions.dynamicMetadataFieldDefinition != undefined &&
            Array.isArray(this.getProperty().dynamicMetadataFieldDefinitions.dynamicMetadataFieldDefinition)) {

            let defs: any[] = this.getProperty().dynamicMetadataFieldDefinitions.dynamicMetadataFieldDefinition;
            let a = new Array;

            defs.forEach(element => {
                let df = {
                    name: element.name,
                    fieldValues: {
                        fieldValue: new Array(),
                    }
                }
                a.push(df);
            });
            m.dynamicFields = {
                dynamicField: a
            }
        }
        let metadata = new Metadata(m, this.getService(), this.getId())

        //default values
        if (this.hasDynamicMetadataFieldDefinitions()) {
            let dfNames = this.getDynamicMetadataFieldDefinitionNames();

            dfNames.forEach(dfName => {
                let df = this.getDynamicMetadataFieldDefinition(dfName);

                if (df.hasDefaultValue()) {
                    metadata.setDynamicFieldValue(dfName, df.getDefaultValueString())
                }
            })
        }
        return metadata;
    }
    getNonHiddenWiredFieldNames(): string[] {
        let fields = new Array();

        if (this.getProperty().authorFieldVisitibility != MetadataSet.HIDDEN) { fields.push(MetadataSet.AUTHOR) }
        if (this.getProperty().descriptionFieldVisibility != MetadataSet.HIDDEN) { fields.push(MetadataSet.DESCRIPTION) }
        if (this.getProperty().displayNameFieldVisibility != MetadataSet.HIDDEN) { fields.push(MetadataSet.DISPLAYNAME) }
        if (this.getProperty().keywordsFieldVisibility != MetadataSet.HIDDEN) { fields.push(MetadataSet.KEYWORDS) }
        if (this.getProperty().summaryFieldVisibility != MetadataSet.HIDDEN) { fields.push(MetadataSet.SUMMARY) }
        if (this.getProperty().teaserFieldVisibility != MetadataSet.HIDDEN) { fields.push(MetadataSet.TEASER) }
        if (this.getProperty().titleFieldVisitibility != MetadataSet.HIDDEN) { fields.push(MetadataSet.TITLE) }

        return fields;
    }
    getReviewDataFieldHelpText() {
        if (typeof this.getProperty().reviewDateFieldHelpText != undefined) {
            return this.getProperty().reviewDateFieldHelpText
        }
        return null;
    }
    getReviewDateFieldRequired(): boolean {
        return this.getProperty().reviewDateFieldRequired;
    }
    getReviewDateFieldVisibility(): string {
        return this.getProperty().reviewDateFieldVisibility;
    }
    getStartDateFieldHelpText() {
        if (typeof this.getProperty().startDateFieldHelpText != undefined) {
            return this.getProperty().startDateFieldHelpText;
        }
        return null
    }
    getStartDateFieldRequired(): boolean {
        return this.getProperty().startDateFieldRequired;
    }
    getStartDateFieldVisibility(): string {
        return this.getProperty().startDateFieldVisibility;
    }
    getSummaryFieldHelpText() {
        if (typeof this.getProperty().summaryFieldHelpText != undefined) {
            return this.getProperty().summaryFieldHelpText;
        }
        return null
    }
    getSummaryFieldRequired(): boolean {
        return this.getProperty().summaryFieldRequired;
    }
    getTeaserFieldHelpText(): string {
        return this.getProperty().TeaserFieldHelpText;
    }
    getTeaserFieldRequired(): boolean {
        return this.getProperty().TeaserFieldRequired;
    }
    getTeaserFieldVisibility(): string {
        return this.getProperty().TeaserFieldVisibility;
    }
    getTitleFieldHelpText(): string {
        return this.getProperty().TitleHelpText;
    }
    getTitleFieldRequired(): boolean {
        return this.getProperty().TitleRequired;
    }
    getTitleFieldVisibility(): string {
        return this.getProperty().TitleVisibility;
    }
    hasDynamicMetadataFieldDefinition(name: string): boolean {
        if (!Array.isArray(this.#fieldNames)) {
            return false;
        }
        return this.#fieldNames.includes(name);
    }
    hasDynamicMetadataFieldDefinitions(): boolean {
        return this.#dynamicMetadataFieldDefinitions.length != 0;
    }
    isDynamicMetadataFieldRequired(name: string): boolean {
        let dfd = this.getDynamicMetadataFieldDefinition(name);
        return dfd.getRequired();
    }
    removeDynamicMetadataFieldDefinition(name: string): Asset {
        if (!this.#fieldNames.includes(name)) {
            throw new Error('The Field ' + name + " does not exist")
        }

        let count = this.#dynamicMetadataFieldDefinitions.length;

        for (let i = 0; i < count; i++) {
            if (this.#dynamicMetadataFieldDefinitions[i].getName() == name) {
                let before = this.#dynamicMetadataFieldDefinitions.slice(0, i);
                let namesBefore = this.#fieldNames.slice(0, i);

                let after = new Array();
                let namesAfter = new Array();

                if (count - i > 1) {
                    after = this.#dynamicMetadataFieldDefinitions.slice(i + 1);
                    namesAfter = this.#fieldNames.slice(i + 1);
                }

                this.#dynamicMetadataFieldDefinitions = before.concat(after);
                this.#fieldNames = namesBefore.concat(namesAfter);
                break;

            }
        }
        this.edit();
        this.processDynamicMetadataFieldDefinition();

        return this;
    }
    removeField(name: string): Asset {
        return this.removeDynamicMetadataFieldDefinition(name);
    }
    removeValue(name: string, value: string): Asset {
        value = value.trim();

        if (value == '') {
            throw new Error('Empty Value Error')
        }

        let def = this.getDynamicMetadataFieldDefinition(name);
        def.removeValue(value);
        this.edit()
        this.processDynamicMetadataFieldDefinition();

        return this;
    }
    setAuthorFieldHelpText(authorFieldHelpText: string = ""): Asset {
        this.getProperty().authorFieldHelpText = authorFieldHelpText
        return this;
    }
    setAuthorFieldVisibility(visibility: string = MetadataSet.HIDDEN): Asset {
        if (!c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable")
        }
        this.getProperty().authorFieldVisibility = visibility;
        return this;
    }
    setDescriptionFieldHelpText(helpText: string = ""): Asset {
        this.getProperty().descriptionFieldHelpText = helpText;
        return this;
    }
    setDescriptionFieldRequired(required: boolean): Asset {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean")
        }
        this.getProperty().descriptionFieldRequired = required;
        return this;
    }
    setDescriptionFieldVisibility(visibility: string = MetadataSet.HIDDEN): Asset {
        if( !c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable")
        }

        this.getProperty().descriptionFieldVisibility = visibility;
        return this;
    }
    setDisplayNameFieldHelpText(helpText: string = ""): Asset {
        this.getProperty().displayNameFieldHelpText = helpText;
        return this;
    }
    setDisplayNameFieldRequired(required: boolean): Asset {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean")
        }
        this.getProperty().displayNameFieldRequired = required;
        return this;
    }
    setDisplayNameFieldVisibility(visibility: string = MetadataSet.HIDDEN): Asset {
        if( !c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable")
        }

        this.getProperty().displayNameFieldVisibility = visibility;
        return this;
    }
    setDynamicMetadataFieldDefinitions(dmfd: any = null): Asset {
        if (dmfd == null || !(typeof dmfd.DynamicMetadataFieldDefinition != undefined)) {
            this.getProperty().dynamicMetadataFieldDefinitions = {};
        } else {
            this.#dynamicMetadataFieldDefinitions = new Array();
            this.#fieldNames = new Array();

            let defs = dmfd.DynamicMetadataFieldDefinition;

            if (Array.isArray(defs)) {
                defs = new Array(defs);
            }
            let count = defs.length;

            for(let i = 0; i < count; i++) {
                this.#dynamicMetadataFieldDefinitions.push(new DynamicMetadataFieldDefinition(defs[i], this.getService()));
                this.#fieldNames.push(defs[i].name);
            }
            return this.edit();
        }
    }
    setEndDateFieldHelpText(helpText: string = ""): Asset {
        this.getProperty().endDateFieldHelpText = helpText;
        return this;
    }
    setEndDateFieldRequired(required: boolean): Asset {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean")
        }
        this.getProperty().endDateFieldRequired = required;
        return this;
    }
    setEndDateFieldVisibility(visibility: string = MetadataSet.HIDDEN): Asset {
        if( !c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable")
        }

        this.getProperty().endDateFieldVisibility = visibility;
        return this;
    }
    setExpirationFolderFieldRequired(required: boolean): Asset {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean")
        }
        this.getProperty().expirationFolderFieldRequired = required;
        return this;
    }
    setExpirationFolderFieldVisibility(visibility: string = MetadataSet.HIDDEN): Asset {
        if( !c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable")
        }

        this.getProperty().expirationFolderFieldVisibility = visibility;
        return this;
    }
    setKeywordsFieldHelpText(helpText: string = ""): Asset {
        this.getProperty().keywordsFieldHelpText = helpText;
        return this;
    }
    setKeywordsFieldRequired(required: boolean): Asset {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean")
        }
        this.getProperty().keywordsFieldRequired = required;
        return this;
    }
    setKeywordsFieldVisibility(visibility: string = MetadataSet.HIDDEN): Asset {
        if( !c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable")
        }

        this.getProperty().keywordsFieldVisibility = visibility;
        return this;
    }
    setLabel(name: string, label: string): Asset {
        label = label.trim();

        if (label == '') {
            throw new Error('Empty label')
        }

        if (this.getDynamicMetadataFieldDefinition(name)) {
            let d = this.getDynamicMetadataFieldDefinition(name);
            d.setLabel(label);

            return this;
        } else {
            throw new Error('The definition ' + name + ' does not exist');
        }
    }
    setRequired(name:string,required:boolean = false): Asset {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + ' must be a boolean');
        }
        if (this.hasDynamicMetadataFieldDefinition(name)) {
            let d = this.getDynamicMetadataFieldDefinition(name);
            d.setRequired(required);
        
        return this;
        } else {
            throw new Error('The definition ' + name + ' does not exist');
        }
    }
    setReviewDateFieldHelpText(helpText: string = ""): Asset {
        this.getProperty().reviewDateFieldHelpText = helpText;
        return this;
    }
    setReviewDateFieldRequired(required: boolean): Asset {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean")
        }
        this.getProperty().reviewDateFieldRequired = required;
        return this;
    }
    setReviewDateFieldVisibility(visibility: string = MetadataSet.HIDDEN): Asset {
        if( !c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable")
        }

        this.getProperty().reviewDateFieldVisibility = visibility;
        return this;
    }
    setSelectedByDefault(name: string, value: string): Asset {
        value = value.trim();

        if (value = '') {
            throw new Error('Empty Value')
        }

        if (this.hasDynamicMetadataFieldDefinition(name)) {
            let d = this.getDynamicMetadataFieldDefinition(name)

            if (d.hasPossibleValue(value)) {
                d.setSelectedByDefault(value);
            }
        } else {
            throw new Error('the definition ' + name + 'does not exist');
        }
        return this;
    }
    setStartDateFieldHelpText(helpText: string = ""): Asset {
        this.getProperty().startDateFieldHelpText = helpText;
        return this;
    }
    setStartDateFieldRequired(required: boolean): Asset {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean")
        }
        this.getProperty().startDateFieldRequired = required;
        return this;
    }
    setStartDateFieldVisibility(visibility: string = MetadataSet.HIDDEN): Asset {
        if( !c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable")
        }

        this.getProperty().startDateFieldVisibility = visibility;
        return this;
    }
    setSummaryFieldHelpText(helpText: string = ""): Asset {
        this.getProperty().summaryFieldHelpText = helpText;
        return this;
    }
    setSummaryFieldRequired(required: boolean): Asset {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean")
        }
        this.getProperty().summaryFieldRequired = required;
        return this;
    }
    setSummaryFieldVisibility(visibility: string = MetadataSet.HIDDEN): Asset {
        if( !c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable")
        }

        this.getProperty().summaryFieldVisibility = visibility;
        return this;
    }
    setTeaserFieldHelpText(helpText: string = ""): Asset {
        this.getProperty().teaserFieldHelpText = helpText;
        return this;
    }
    setTeaserFieldRequired(required: boolean): Asset {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean")
        }
        this.getProperty().teaserFieldRequired = required;
        return this;
    }
    setTeaserFieldVisibility(visibility: string = MetadataSet.HIDDEN): Asset {
        if( !c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable")
        }

        this.getProperty().teaserFieldVisibility = visibility;
        return this;
    }
    setTitleFieldHelpText(helpText: string = ""): Asset {
        this.getProperty().titleFieldHelpText = helpText;
        return this;
    }
    setTitleFieldRequired(required: boolean): Asset {
        if (!c.BooleanValues.isBoolean(required)) {
            throw new Error('The value ' + required + " must be a boolean")
        }
        this.getProperty().titleFieldRequired = required;
        return this;
    }
    setTitleFieldVisibility(visibility: string = MetadataSet.HIDDEN): Asset {
        if( !c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable")
        }

        this.getProperty().titleFieldVisibility = visibility;
        return this;
    }
    setVisibility(name: string, visibility: string): Asset {
        if( !c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable")
        }
        if(this.hasDynamicMetadataFieldDefinition(name)) {
            let d = this.getDynamicMetadataFieldDefinition(name);

            if (visibility == MetadataSet.VISISBLE || visibility == MetadataSet.INLINE || visibility == MetadataSet.HIDDEN ) {
                d.setVisibility(visibility);
                return this;
            }
            else {
                throw new Error("The definition "+ name+" does not exist");
            }
        } else {
            throw new Error('The definition' + name + " does not exist");
        }
    }
    swapDynamicMetadataFieldDefinitions(value1: string, value2: string): Asset {
        if (value1 == '' || value2 == '') {
            throw new Error("Empty value")
        }
        if (!this.#fieldNames.includes(value1)) {
            throw new Error('The value ' + value1 + ' does not exist')
        }
        if (!this.#fieldNames.includes(value2)) {
            throw new Error('The value ' + value2 + ' does not exist')
        }

        let firstPvPos = -1;
        let secondPvPos = -1;

        let count = this.#dynamicMetadataFieldDefinitions.length;

        for (let i = 0; i < i; i++) {
            if(this.#dynamicMetadataFieldDefinitions[i].getName() == value1 ) {
                firstPvPos = i;
            }
            if(this.#dynamicMetadataFieldDefinitions[i].getName() == value2 ) {
                secondPvPos = i;
            }
        }

        let tempVal = this.#dynamicMetadataFieldDefinitions[firstPvPos];
        this.#dynamicMetadataFieldDefinitions[firstPvPos] = this.#dynamicMetadataFieldDefinitions[secondPvPos] 

        this.#dynamicMetadataFieldDefinitions[secondPvPos] = tempVal;

        this.edit();
        this.processDynamicMetadataFieldDefinition();

        return this;
    }
    swapFields(def1: string, def2: string): Asset {
        return this.swapDynamicMetadataFieldDefinitions(def1, def2);
    }
    swapValues(name:string, value1: string, value2: string): Asset {
        let def = this.getDynamicMetadataFieldDefinition(name);
        def.swapValues(value1, value2);
        this.edit();
        this.processDynamicMetadataFieldDefinition();

        return this;
    }
    unsetSelectedByDefault(name:string, value:string):Asset {
        value = value.trim();

        if(value == '') {
            throw new Error('Empty value')
        }

        if (this.hasDynamicMetadataFieldDefinition(name)) {
            let d = this.getDynamicMetadataFieldDefinition(name);

            if (d.hasPossibleValue(value)) {
                d.unsetSelectedByDefault(value);
            }
        } else {
            throw new Error('The definition ' + name + " does not exist");
        }
        return this;
    }
    processDynamicMetadataFieldDefinition() {
        this.#dynamicMetadataFieldDefinitions = new Array();
        this.#fieldNames = new Array();

        let definitions = this.getProperty().dynamicMetadataFieldDefinitions;

        if (!Array.isArray(definitions)) {
            definitions = new Array(definitions)
        }

        let count = definitions.length;

        for (let i = 0; i < count; i++) {
            this.#dynamicMetadataFieldDefinitions.push(new DynamicMetadataFieldDefinition(definitions[i], this.getService()));
            this.#fieldNames.push(definitions[i].name);
        }
    }









}
