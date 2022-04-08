import {Struct, c} from "../internal.js"

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

    static getDataDefinitionPage(): any {
        const page: Struct.dataDefinitionPage = {
            name: "",
            siteName: "",
            parentFolderPath: "",
            xhtml: null,
            contentTypeId: ""
        }

        const asset = {
            page: page
        }

        return asset
    }

    static getXhtmlPage(): any {
        const page: Struct.xhtmlPage = {
            name: "",
            siteName: "",
            parentFolderPath: "",
            xhtml: "",
            contentTypeId: "",
            contentTypePath: ""
        }

        const asset = {
            page: page
        }

        return asset
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