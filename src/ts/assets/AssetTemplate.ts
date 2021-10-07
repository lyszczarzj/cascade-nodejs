import * as Struct from "../struct.js";
import * as c from "../constants.js";

export default class AssetTemplate {
    static getDynamicMetadataFieldDefinition(): any {
        var dmfd: Struct.dynamicMetadataFieldDefinition  = {
            name: "",
            label: "",
            fieldType: "",
            required: false,
            visibility: c.TYPES.VISIBLE,
            possibleValues: null,
            helpText: ""
        }
        let asset: any = {};
        asset['dynamicMetadataFieldDefinition'] = dmfd;
        return asset;
    }

    static getMetadata(): any {
        var m: Struct.metadata = {
            author: null,
            displayName: null,
            endDate: null,
            keywords: null,
            metaDescription: null,
            reviewDate: null,
            startDate: null,
            summary: null,
            teaser: null,
            title: null,
            dynamicFields: null
        }
        return m;
    }
}