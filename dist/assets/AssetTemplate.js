import * as c from "../constants.js";
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
}
//# sourceMappingURL=AssetTemplate.js.map