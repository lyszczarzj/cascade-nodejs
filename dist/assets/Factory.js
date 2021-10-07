var _a, _Factory_instance;
import * as c from "../constants.js";
import Page from "../assets/Page.js";
export default class Factory {
    static getAsset(service, type, idPath, siteName = null) {
        var exists = Object.values(c.TYPES).includes(type);
        if (!exists) {
            throw new Error('No Such Type' + type + 'Found');
        }
        const mapping = new Map([
            [c.TYPES.PAGE, Page],
        ]);
        let Constructor = mapping.get(type);
        try {
            return new Constructor(service, service.createId(type, idPath, siteName));
        }
        catch (e) {
            throw new Error(`Null Asset: ${idPath}`);
        }
    }
}
_a = Factory;
_Factory_instance = { value: void 0 };
//# sourceMappingURL=Factory.js.map