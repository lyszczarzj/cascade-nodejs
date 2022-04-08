import { c } from "../internal.js";
export default class AssetTemplate {
    static getDynamicMetadataFieldDefinition() {
        var dmfd = {
            name: "",
            label: "",
            fieldType: "",
            required: false,
            visibility: c.TYPES.VISIBLE,
            possibleValues: null,
            helpText: ""
        };
        let asset = {};
        asset['dynamicMetadataFieldDefinition'] = dmfd;
        return asset;
    }
    static getDataDefinitionPage() {
        const page = {
            name: "",
            siteName: "",
            parentFolderPath: "",
            xhtml: null,
            contentTypeId: ""
        };
        const asset = {
            page: page
        };
        return asset;
    }
    static getXhtmlPage() {
        const page = {
            name: "",
            siteName: "",
            parentFolderPath: "",
            xhtml: "",
            contentTypeId: "",
            contentTypePath: ""
        };
        const asset = {
            page: page
        };
        return asset;
    }
    static getMetadata() {
        var m = {
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
        };
        return m;
    }
}
//# sourceMappingURL=AssetTemplate.js.map