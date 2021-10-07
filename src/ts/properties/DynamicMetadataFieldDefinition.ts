import RequestService from "../RequestService.js";
import Property from "./Property.js";
import * as c from "../constants.js";
import PossibleValue from "./PossibleValue.js";

export default class DynamicMetadataFieldDefinition extends Property {
    #service: RequestService
    #name: string
    #label: string
    #fieldType: string
    #required: boolean
    #visibility: string
    #possibleValues: Array<PossibleValue>
    #values: Array<string>
    #helpText: string
    constructor(obj: any, service: RequestService = null, data1: any = null, data2: any = null, data3: any = null) {
        super(obj, service, data1, data2, data3)
        
        if (service == null) {
            throw new Error("Null Service")
        }
        this.#service = service

        if(typeof obj != undefined) {
            if('name' in obj && typeof obj.name != undefined) {
                this.#name = obj.name;
            }
            if('label' in obj && typeof obj.label != undefined) {
                this.#label = obj.label;
            }
            if('fieldType' in obj && typeof obj.fieldType != undefined) {
                this.#fieldType = obj.fieldType;
            }
            if('required' in obj && typeof obj.required != undefined) {
                this.#required = obj.required;
            }
            if('visibility' in obj && typeof obj.visibility != undefined) {
                this.#visibility = obj.visibility;
            }
            if('helpText' in obj && typeof obj.helpText != undefined) {
                this.#helpText = obj.helpText;
            }
        }

        if (typeof obj.possibleValues != undefined && obj.possibleValues != null ) {
            this.processPossibleValues(obj.possibleValues);
        }
    }
    appendValue(value: string): Property {
        if(this.#possibleValues == null) {
            console.log('no possible value')
            return this;
        }

        value = value.trim();

        if (value == '') {
            throw new Error('Empty Value')  
        }

        if (!this.hasPossibleValue(value)) {
            const obj = {
                value: value,
                selectedByDefault: false,
            }
            this.#possibleValues.push(new PossibleValue(obj))
            this.#values.push(value)
        } else {
            console.log("The value" + value + "already exists");
            console.log('');
        }
        return this;
    }
    getDefaultValue(): PossibleValue | null {
        this.#possibleValues.forEach((ps) => {
            if (ps.isDefaultValue()) {
                return ps
            }
        })
        return null;
    }
    getDefaultValueString(): string | null {
        this.#possibleValues.forEach((ps) => {
            if (ps.isDefaultValue()) {
                return ps.getValue();
            }
        })
        return null;
    }
    getFieldType(): string {
        return this.#fieldType;
    }
    getHelpText(): string {
        return this.#helpText;
    }
    getLabel(): string {
        return this.#label;
    }
    getName(): string {
        return this.#name;
    }
    getPossibleValue(value: string): PossibleValue {
        this.#possibleValues.forEach((possibleValue) => {
            if(possibleValue.getValue() == value) {
                return possibleValue;
            }
        })
        throw new Error("The value" + value + "does not exist")
    }
    getPossibleValues(): Array<PossibleValue> {
        return this.#possibleValues;
    }
    getPossibleValueStrings() {
        if(this.#possibleValues == null) {
            console.log('no possible values')
            return "";
        }
        return this.#values;
    }
    getRequired(): boolean {
        return this.#required;
    }
    getVisibility(): string {
        return this.#visibility;
    }
    hasDefaultValue(): boolean {
        if(!this.isText()) {
            this.#possibleValues.forEach((ps) => {
                if (ps.isDefaultValue()) {
                    return true;
                }
            })
        }
        return false;
    }
    hasPossibleValue(value: string): boolean {
        if (this.#possibleValues == null) {
            console.log('no possible values')
            return false
        }
        return this.#values.includes(value);
    }
    isCheckbox(): boolean {
        return this.getFieldType() == c.TYPES.CHECKBOX;
    }
    isDateTime(): boolean {
        return this.getFieldType() == c.TYPES.DATETIME;
    }
    isDropdown(): boolean {
        return this.getFieldType() == c.TYPES.DROPDOWN;
    }
    isMultiselect(): boolean {
        return this.getFieldType() == c.TYPES.MULTISELECT;
    }
    isRadio(): boolean {
        return this.getFieldType() == c.TYPES.RADIO;
    }
    isText(): boolean {
        return this.getFieldType() == c.TYPES.TEXT
    }
    isRequired(): boolean {
        return this.#required;
    }
    removeValue(value: string): Property {
        //type of text
        if(this.#possibleValues == null) {
            console.log('no possible value');
            return this;
        }

        if (value == '') {
            throw new Error('The value cannot be empty');
        }

        if (!this.#values.includes(value)) {
            throw new Error('the value' + value + ' does not exist');
        }

        let count = this.#possibleValues.length;

        for (let i = 0; i < count; i++) {
            if (this.#possibleValues[i].getValue() == value) {
               let before = this.#possibleValues.slice(0, i);
               let valuesBefore = this.#values.slice(0, i);
               
               let after: Array<PossibleValue> = [];
               let valuesAfter: Array<string> = [];
               
               if(count - i > 1) {
                   after = this.#possibleValues.slice(i+1);
                   valuesAfter = this.#values.slice(i+1);
               }

               this.#possibleValues = before.concat(after);
               this.#values = valuesBefore.concat(valuesAfter);
               break;
            }
        }
        return this;
    }
    setHelpText(helpText: string): Property {
        this.#helpText = helpText;
        return this;
    }
    setLabel(label:string): Property {
        label = label.trim();
        if (label == '') {
            throw new Error('The label cannot be empty');
        }
        this.#label = label;
        return this;
    }
    setRequired(required: boolean):Property {
        if(!(typeof required == "boolean")) {
            throw new Error('The value required must be a boolean')
        }
        if (required) {
            this.#visibility = c.TYPES.VISIBLE;
        }
        this.#required = required;
        return this;
    }
    setSelectedByDefault(value: string): Property {
        if(!this.#values.includes(value)) {
            throw new Error('The value ' + value + ' does not exist');
        }

        this.#possibleValues.forEach((item) => {

            if (item.getValue() ==  value) {
                item.setSelectedByDefault(true);
            }
            if(this.#fieldType == c.TYPES.RADIO || this.#fieldType == c.TYPES.DROPDOWN) {
                if (item.getValue() != value) {
                    item.setSelectedByDefault(false);
                }
            }
        })
        return this;
    }
    setVisibility(visibility: string): Property {
        if (!c.VisibilityValues.isVisibility(visibility)) {
            throw new Error('The value ' + visibility + " is not acceptable");
        }
        if (visibility == c.TYPES.HIDDEN) {
            this.#required = false;
            this.#visibility = visibility;
        } else {
            this.#visibility = visibility;
        }
        return this;
    }
    swapValues(value1: string, value2: string): Property {
        if (this.#possibleValues == null) {
            console.log('No Possible Value');
            return this;
        }
        if (value1 == '' || value2 == '') {
            throw new Error('The value cannot be empty')
        }
        if (!this.#values.includes(value1)) {
            throw new Error('The value ' + value1 + ' does not exist')
        }
        if (!this.#values.includes(value2)) {
            throw new Error('The value ' + value2 + ' does not exist')
        }

        let firstPvPos = -1;
        let secondPvPos = -1;

        let count = this.#possibleValues.length;

        for (let i = 0; i < i; i++) {
            if(this.#possibleValues[i].getValue() == value1 ) {
                firstPvPos = i;
            }
            if(this.#possibleValues[i].getValue() == value2 ) {
                secondPvPos = i;
            }
        }

        let tempVal = this.#values[firstPvPos];
        this.#values[firstPvPos] = value2;
        this.#values[secondPvPos] = value1;

        let temp = this.#possibleValues[firstPvPos];
        this.#possibleValues[firstPvPos] = this.#possibleValues[secondPvPos];
        this.#possibleValues[secondPvPos] = temp;

        return this;
    }
    toObject(): any {
        const obj = {
            name: this.#name,
            label: this.#label,
            fieldType: this.#fieldType,
            required: this.#required,
            visibility: this.#visibility,
            helpText: this.#helpText,
            possibleValues: new Array()
        }

        if (typeof this.#possibleValues != undefined) {
            let count = this.#possibleValues.length;

            if (count == 1) {
                obj.possibleValues.push(this.#possibleValues[0].toObject())
            }
            else {
                let vArray = new Array();
                let selectedCount = 0;

                for(let i = 0; i < count; i++) {
                    let currValue = this.#possibleValues[i].getValue();

                    if(this.#possibleValues[i].getSelectedByDefault()) {
                        selectedCount++

                        if (selectedCount > 1 && (this.#fieldType == c.TYPES.RADIO || this.#fieldType == c.TYPES.DROPDOWN)) {
                            throw new Error('Multiple values have been selected by default');
                        }
                    }
                    
                    if (vArray.includes(currValue)) {
                        throw new Error('Repeated Value Found');
                    } else {
                        vArray.push(currValue);
                    } 

                    obj.possibleValues.push(this.#possibleValues[i].toObject())


                }
            }
        } else {
            obj.possibleValues = new Array();
        }
        return obj;
    }
    unsetSelectedByDefault(value: string): Property {
        if (!this.hasPossibleValue(value)) {
            throw new Error('The value ' + value + ' does not exist');
        }

        this.#possibleValues.forEach((item) => {
            if (item.getValue() == value) {
                item.setSelectedByDefault(false);
            }
        })
        return this;
    }
    private processPossibleValues(values: any) {
        this.#possibleValues = new Array();
        this.#values = new Array();

        if (values == null) {
            this.#possibleValues = null;
            return;
        }

        if (!Array.isArray(values)) {
            values = new Array(values);
        }

        let count = values.length;

        for (let i = 0; i < count; i++) {
            this.#possibleValues.push(new PossibleValue(values[i]));
            this.#values.push(values[i].value);
        }
    }
}