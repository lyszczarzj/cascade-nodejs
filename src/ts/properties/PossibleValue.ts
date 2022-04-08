// import Property from "./Property.js";
// import * as c from "../constants.js";
// import RequestService from "../RequestService.js";

import {Property, c, RequestService} from '../internal.js'

export default class PossibleValue extends Property {
    #label: string
    #selectedByDefault: boolean
    #value: string
    constructor(v: any, service: RequestService = null, data1: any = null, data2: any = null, data3: any = null) {
        super(v, service, data1, data2, data3)

        if(typeof v != undefined) {
            if (v.value == null || v.value == '') {
                throw new Error('Empty Value')
            }
            if (!c.BooleanValues.isBoolean(v.selectedByDefault)) {
                throw new Error('The value ' + v.selectedByDefault + ' must be a boolean');
            }
            if (typeof v.label != undefined) {
                this.#label = v.label;
            }
            this.#value = v.value;
            this.#selectedByDefault = v.selectedByDefault;
        }
    }
    getLabel(): string {
        return this.#label;
    }
    getSelectedByDefault(): boolean {
        return this.#selectedByDefault;
    }
    getValue(): string {
        return this.#value;
    }
    isDefaultValue(): boolean {
        return this.#selectedByDefault;
    }
    setLabel(label: string|null = null): Property {
        if (typeof this.#value != undefined) {
            if (typeof label != undefined && label.trim() == "") {
                throw new Error ("The label cannot be empty");
            }
            this.#label = label;
        }
        return this;
    }
    setSelectedByDefault(bool: boolean): Property {
        if (!c.BooleanValues.isBoolean(bool)) {
            throw new Error('The value ' + bool + ' must be a boolean')
        }
        this.#selectedByDefault = bool;
        return this;
    }
    toObject(): any {
        if (this.#value == null || this.#value == '') {
            throw new Error('Empty Value');
        }

        const obj = {
            label: this.#label,
            value: this.#value,
            selectedByDefault: this.#selectedByDefault
        }
        return obj;
    }
}