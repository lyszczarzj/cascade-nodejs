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
var _Cascade_service;
import { Asset, AssetTemplate, c } from "../internal.js";
export default class Cascade {
    constructor(service) {
        _Cascade_service.set(this, void 0);
        try {
            __classPrivateFieldSet(this, _Cascade_service, service, "f");
        }
        catch (e) {
            console.log(e);
        }
    }
    getAsset(type, id_path, siteName = null) {
        try {
            return Asset.getAsset(__classPrivateFieldGet(this, _Cascade_service, "f"), type, id_path, siteName);
        }
        catch (e) {
            throw e;
        }
    }
    createAsset(obj, type, id_path, site_name = "") {
        try {
            return this.getAsset(type, id_path, site_name);
        }
        catch (e) {
            __classPrivateFieldGet(this, _Cascade_service, "f").create(obj);
            if (!__classPrivateFieldGet(this, _Cascade_service, "f").isSuccessful()) {
                throw new Error(__classPrivateFieldGet(this, _Cascade_service, "f").getMessage());
            }
        }
        return this.getAsset(type, id_path, site_name);
    }
    createDataDefinitionPage(parent, name, ct) {
        if (name.trim() == "") {
            throw new Error('Empty Page Name');
        }
        let asset = AssetTemplate.getDataDefinitionPage();
        asset.page.name = name;
        asset.page.parentFolderPath = parent.getPath();
        asset.page.siteName = parent.getSiteName();
        asset.page.contentTypeId = ct.getId();
        asset.page.structuredData = ct.getDataDefinition().getStructuredData();
        return this.createAsset(asset, c.TYPES.PAGE, this.getPath(parent, name), parent.getSiteName());
    }
    createXhtmlPage(parent, name, xhtml = "", ct) {
        if (name.trim() == "") {
            throw new Error('Empty Page Name');
        }
        let asset = AssetTemplate.getXhtmlPage();
        asset.page.name = name;
        asset.page.parentFolderPath = parent.getPath();
        asset.page.siteName = parent.getSiteName();
        asset.page.contentTypeId = ct.getId();
        return this.createAsset(asset, c.TYPES.PAGE, this.getPath(parent, name), parent.getSiteName());
    }
    createPage(parent, name, ct, xhtml = "") {
        if (ct.getDataDefinition() != null) {
            return this.createDataDefinitionPage(parent, name, ct);
        }
        else {
            return this.createXhtmlPage(parent, name, xhtml, ct);
        }
    }
    getPage(id_path, siteName) {
        return this.getAsset(c.TYPES.PAGE, id_path, siteName);
    }
    getPath(parent = null, name = "") {
        let path = "";
        if (parent == null || parent.getPath() == "") {
            path = name;
        }
        else {
            path = parent.getPath() + '/' + name;
        }
        return path;
    }
}
_Cascade_service = new WeakMap();
//# sourceMappingURL=Cascade.js.map