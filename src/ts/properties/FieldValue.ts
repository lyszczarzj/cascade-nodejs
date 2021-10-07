import Property from "./Property.js";
import RequestService from "../RequestService.js";

export default class FieldValue extends Property {
    #service: RequestService
    #values: Array<string>
    constructor(fieldValues: any, service: RequestService = null, data1: any = null, data2: any = null, data3: any = null) {
        super(fieldValues, service, data1, data2, data3)
        if (service == null) {
            throw new Error("Null Service")
        }

        if (typeof fieldValues != undefined) {
            if ('array' in fieldValues && fieldValues.array.length > 0) {
                this.processValues(fieldValues);
            }
            else {
                if ('value' in fieldValues) {
                    this.#values.push(fieldValues.value)
                }
            }
        }
    }
    getValues() {
        return this.#values;
    }
    setValues(values: Array<any>): Property {
        let count = values.length;
        this.#values = [];

        if (count == 1) {
            if (values[0] == null)
                this.#values.push(null)
            else {
                this.#values.push(values[0].value)
            }
        } else {
            values.forEach((value) => {
                if (value.value == null || value.value == "") {
                    throw new Error('Empty Value');
                }

                if (this.#values.includes(value.value)) {
                    throw new Error('Value not Unique');
                } else {
                    this.#values.push(value.value);
                }
            })
        }
        return this;
    }
    toObject() {
        let obj = [];
        let count = this.#values.length;

        if (count == 0) {
            obj = [];
        } else if (count == 1) {
            let value: any = {};

            if (this.#values[0] != '') {
                value['value'] = this.#values[0];
                obj.push(value)
            } else if (this.#values[0] == '' || this.#values[0] == null) {
                obj = [];
            }
        } else {
            for (let i = 0; i < count; i++) {
                let value = { value: this.#values[i] };
                obj.push(value)
            }
        }
        return obj;
    }
    private processValues(values: any) {
        values = values.array

        values.forEach((value: any) => {
            if(typeof value.value != undefined) {
                this.#values.push(value.value)
            }
        })
    }
}