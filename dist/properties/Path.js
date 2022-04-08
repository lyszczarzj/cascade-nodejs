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
var _Path_path, _Path_siteId, _Path_siteName;
import { Property } from "../internal.js";
export default class Path extends Property {
    constructor(json, service = null, data1 = null, data2 = null, data3 = null) {
        super(json, service, data1, data2, data3);
        _Path_path.set(this, void 0);
        _Path_siteId.set(this, void 0);
        _Path_siteName.set(this, void 0);
        if (typeof json != undefined) {
            __classPrivateFieldSet(this, _Path_path, json.path, "f");
            if (typeof json.siteId != undefined) {
                __classPrivateFieldSet(this, _Path_siteId, json.siteId, "f");
            }
            if (typeof json.siteName != undefined) {
                __classPrivateFieldSet(this, _Path_siteName, json.siteName, "f");
            }
        }
    }
    getPath() {
        return __classPrivateFieldGet(this, _Path_path, "f");
    }
    getSiteId() {
        return __classPrivateFieldGet(this, _Path_siteId, "f");
    }
    getSiteName() {
        return __classPrivateFieldGet(this, _Path_siteName, "f");
    }
    toObject() {
        return {
            path: __classPrivateFieldGet(this, _Path_path, "f"),
            siteId: __classPrivateFieldGet(this, _Path_siteId, "f"),
            siteName: __classPrivateFieldGet(this, _Path_siteName, "f")
        };
    }
}
_Path_path = new WeakMap(), _Path_siteId = new WeakMap(), _Path_siteName = new WeakMap();
//# sourceMappingURL=Path.js.map