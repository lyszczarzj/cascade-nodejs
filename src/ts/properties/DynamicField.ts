import RequestService from "../RequestService.js";
import Property from "./Property.js";
import FieldValue from "./FieldValue.js"

export default class DynamicField extends Property {
    #name: string
    #fieldValues: FieldValue
    #service: RequestService


    constructor(json: any, service: RequestService = null, data1: any = null, data2: any = null, data3: any = null) {
        super(json, service, data1, data2, data3)
    
        if (service == null) {
            throw new Error("Null Service");
        }

        this.#service = service

        if (typeof json != undefined) {
            if ('name' in json ) {
                this.#name = json.name;
            }
            if('fieldValues' in json) {
                this.processFieldValues(json.fieldValues)
            }
            else {
                this.#fieldValues = new FieldValue({}, this.#service)
            }
        }
    }
    getFieldValue(): FieldValue {
        if (typeof this.#fieldValues == undefined) {
            console.log("null field value");
        }
        return this.#fieldValues;
    }

    getName(): string {
        return this.#name;
    }

    setValue(values: Array<any>): Property {
        if (!Array.isArray(values)) {
            values = new Array(values);
        }
        this.#fieldValues.setValues(values);
        return this;
    }

    toObject() {
        if (typeof this.#name == undefined) {
            return null;
        }

        const obj: any = {
            name: this.#name,
            fieldValues: "toast"
        }

        let fvs = undefined
        if (typeof this.#fieldValues != undefined) {
            fvs = this.#fieldValues.toObject();
        } else {
            fvs = [];
        }

        obj['fieldValues'] = fvs
        return obj
        
    }

    processFieldValues(values: any) {
        var obj
        if (Array.isArray(values)) {
            obj = {
                array: values
            }
        } else {
            obj = values;
        }
        this.#fieldValues = new FieldValue(obj, this.#service)
    }
    

}