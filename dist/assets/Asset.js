var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Asset_id, _Asset_path, _Asset_siteName, _Asset_siteId, _Asset_service, _Asset_identifier, _Asset_type, _Asset_propertyName, _Asset_property, _Asset_name, _Asset_json;
import * as c from "../constants.js";
import * as Maps from "../maps.js";
export default class Asset {
    constructor(service, identifier) {
        _Asset_id.set(this, void 0);
        _Asset_path.set(this, void 0);
        _Asset_siteName.set(this, void 0);
        _Asset_siteId.set(this, void 0);
        _Asset_service.set(this, void 0);
        _Asset_identifier.set(this, void 0);
        _Asset_type.set(this, void 0);
        _Asset_propertyName.set(this, void 0);
        _Asset_property.set(this, void 0);
        _Asset_name.set(this, void 0);
        _Asset_json.set(this, void 0);
        if (service == null) {
            throw new Error('Service is null');
        }
        if (identifier == null) {
            throw new Error('Identifier is null');
        }
        service.retrieve(identifier).then((property) => {
            if (typeof property !== 'undefined') {
                if (typeof identifier.id !== 'undefined') {
                    var id = identifier.id;
                }
                if (typeof identifier.path !== 'undefined') {
                    var path = identifier.path.path;
                    if (identifier.path.siteName !== 'undefined') {
                        var siteName = identifier.path.siteName;
                    }
                }
                if (typeof identifier.path == 'undefined' && typeof identifier.path !== 'undefined') {
                    var id = path;
                }
                else {
                    id = "";
                }
            }
            __classPrivateFieldSet(this, _Asset_service, service, "f");
            __classPrivateFieldSet(this, _Asset_identifier, identifier, "f");
            __classPrivateFieldSet(this, _Asset_type, identifier.type, "f");
            __classPrivateFieldSet(this, _Asset_propertyName, "", "f");
            __classPrivateFieldSet(this, _Asset_property, property, "f");
            let object = {};
            object[__classPrivateFieldGet(this, _Asset_type, "f")];
            object[__classPrivateFieldGet(this, _Asset_type, "f")] = __classPrivateFieldGet(this, _Asset_property, "f");
            __classPrivateFieldSet(this, _Asset_json, JSON.stringify(object), "f");
        });
    }
    display() {
        let id = this.getId();
        let name = this.getName();
        console.log(`Id: ${id}
        Name: ${name}
        Path: ${__classPrivateFieldGet(this, _Asset_path, "f")}
        Site ID: ${__classPrivateFieldGet(this, _Asset_siteId, "f")}
        Site Name: ${__classPrivateFieldGet(this, _Asset_siteName, "f")}
        Property Name: ${__classPrivateFieldGet(this, _Asset_propertyName, "f")}
        Type: ${__classPrivateFieldGet(this, _Asset_type, "f")}
        `);
        return this;
    }
    edit() {
        return this.reloadProperty();
    }
    getId() {
        return __classPrivateFieldGet(this, _Asset_id, "f");
    }
    getIdentifier() {
        return __classPrivateFieldGet(this, _Asset_identifier, "f");
    }
    getJson() {
        return __classPrivateFieldGet(this, _Asset_json, "f");
    }
    getName() {
        return __classPrivateFieldGet(this, _Asset_name, "f");
    }
    getPath() {
        return __classPrivateFieldGet(this, _Asset_path, "f");
    }
    getProperty() {
        return __classPrivateFieldGet(this, _Asset_property, "f");
    }
    getPropertyName() {
        return __classPrivateFieldGet(this, _Asset_propertyName, "f");
    }
    getService() {
        return __classPrivateFieldGet(this, _Asset_service, "f");
    }
    getType() {
        return __classPrivateFieldGet(this, _Asset_type, "f");
    }
    reloadProperty() {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof __classPrivateFieldGet(this, _Asset_identifier, "f").path.path == undefined) {
                __classPrivateFieldGet(this, _Asset_identifier, "f").path = { path: "" };
            }
            __classPrivateFieldSet(this, _Asset_property, yield __classPrivateFieldGet(this, _Asset_service, "f").retrieve(__classPrivateFieldGet(this, _Asset_identifier, "f")), "f");
            return this;
        });
    }
    update(params) {
        Asset.staticUpdateData(this, params);
        return this;
    }
    updateData(params) {
        Asset.staticUpdateData(this, params);
        return this;
    }
    static getAsset(service, type, idPath, siteName = null) {
        var exists = Object.values(c.TYPES).includes(type);
        if (!exists) {
            throw new Error('No Such Type' + type + 'Found');
        }
        let className = Maps.typeMappingArray.get(type);
        try {
            return new className(service, service.createId(type, idPath, siteName));
        }
        catch (e) {
            throw new Error(`Null Asset: ${idPath}`);
        }
    }
    static staticUpdateData(a, params) {
        return a;
    }
}
_Asset_id = new WeakMap(), _Asset_path = new WeakMap(), _Asset_siteName = new WeakMap(), _Asset_siteId = new WeakMap(), _Asset_service = new WeakMap(), _Asset_identifier = new WeakMap(), _Asset_type = new WeakMap(), _Asset_propertyName = new WeakMap(), _Asset_property = new WeakMap(), _Asset_name = new WeakMap(), _Asset_json = new WeakMap();
//# sourceMappingURL=Asset.js.map