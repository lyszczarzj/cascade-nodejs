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
var _Child_id, _Child_path, _Child_type, _Child_recycled;
import { Property, Path, Factory } from "../internal.js";
export default class Child extends Property {
    constructor(json, service = null, data1 = null, data2 = null, data3 = null) {
        super(json, service, data1, data2, data3);
        _Child_id.set(this, void 0);
        _Child_path.set(this, void 0);
        _Child_type.set(this, void 0);
        _Child_recycled.set(this, void 0);
        if (typeof json != undefined) {
            if (typeof json.id != undefined) {
                __classPrivateFieldSet(this, _Child_id, json.id, "f");
            }
            if (typeof json.path != undefined) {
                __classPrivateFieldSet(this, _Child_path, new Path(json.path), "f");
            }
            if (typeof json.recycled != undefined) {
                __classPrivateFieldSet(this, _Child_recycled, json.recycled, "f");
            }
            else {
                __classPrivateFieldSet(this, _Child_recycled, false, "f");
            }
        }
        else {
            throw new Error('Null Identifier');
        }
    }
    display() {
        console.log(`Type: ${__classPrivateFieldGet(this, _Child_type, "f")}
        Path: ${__classPrivateFieldGet(this, _Child_path, "f").getPath()}
        ID: ${__classPrivateFieldGet(this, _Child_id, "f")}`);
        return this;
    }
    getAsset(service) {
        if (typeof service == null) {
            throw new Error('No Service');
        }
        if (typeof __classPrivateFieldGet(this, _Child_id, "f") != undefined) {
            return Factory.getAsset(service, __classPrivateFieldGet(this, _Child_type, "f"), __classPrivateFieldGet(this, _Child_id, "f"));
        }
        else {
            return Factory.getAsset(service, __classPrivateFieldGet(this, _Child_type, "f"), __classPrivateFieldGet(this, _Child_path, "f").getPath(), __classPrivateFieldGet(this, _Child_path, "f").getSiteName());
        }
    }
    getId() {
        return __classPrivateFieldGet(this, _Child_id, "f");
    }
    getPath() {
        return __classPrivateFieldGet(this, _Child_path, "f");
    }
    getPathPath() {
        if (typeof __classPrivateFieldGet(this, _Child_path, "f") != undefined) {
            return __classPrivateFieldGet(this, _Child_path, "f").getPath();
        }
        return null;
    }
    getPathSiteId() {
        if (typeof __classPrivateFieldGet(this, _Child_path, "f") != undefined) {
            return __classPrivateFieldGet(this, _Child_path, "f").getSiteId();
        }
        return null;
    }
    getPathSiteName() {
        if (typeof __classPrivateFieldGet(this, _Child_path, "f") != undefined) {
            return __classPrivateFieldGet(this, _Child_path, "f").getSiteName();
        }
        return null;
    }
    getRecycled() {
        return __classPrivateFieldGet(this, _Child_recycled, "f");
    }
    getType() {
        return __classPrivateFieldGet(this, _Child_type, "f");
    }
    toObject() {
        var obj;
        if (typeof __classPrivateFieldGet(this, _Child_id, "f") != undefined) {
            obj.id = __classPrivateFieldGet(this, _Child_id, "f");
        }
        if (typeof __classPrivateFieldGet(this, _Child_path, "f") != undefined) {
            obj.path = __classPrivateFieldGet(this, _Child_path, "f").toObject();
        }
        obj.type = __classPrivateFieldGet(this, _Child_type, "f");
        obj.recycled = __classPrivateFieldGet(this, _Child_recycled, "f");
    }
}
_Child_id = new WeakMap(), _Child_path = new WeakMap(), _Child_type = new WeakMap(), _Child_recycled = new WeakMap();
//# sourceMappingURL=Child.js.map