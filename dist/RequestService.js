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
var _RequestService_types, _RequestService_properties, _RequestService_url, _RequestService_auth, _RequestService_message, _RequestService_success, _RequestService_reply, _RequestService_audits, _RequestService_commands;
import fetch from 'node-fetch';
import * as c from "./constants.js";
export default class RequestService {
    constructor(type, url, auth, context = null) {
        _RequestService_types.set(this, void 0);
        _RequestService_properties.set(this, [
            c.TYPES.ASSETFACTORY,
            c.TYPES.ASSETFACTORYCONTAINER,
            c.TYPES.CLOUDTRANSPORT,
            c.TYPES.CONNECTORCONTAINER,
            c.TYPES.CONTENTTYPE,
            c.TYPES.CONTENTTYPECONTAINER,
            c.TYPES.DATADEFINITION,
            c.TYPES.DATADEFINITIONCONTAINER,
            c.TYPES.DESTINATION,
            c.TYPES.FACEBOOKCONNECTOR,
            c.TYPES.FEEDBLOCK,
            c.TYPES.FILE,
            c.TYPES.FOLDER,
            c.TYPES.GOOGLEANALYTICSCONNECTOR,
            c.TYPES.GROUP,
            c.TYPES.INDEXBLOCK,
            c.TYPES.MESSAGE,
            c.TYPES.METADATASET,
            c.TYPES.METADATASETCONTAINER,
            c.TYPES.PAGE,
            c.TYPES.PAGECONFIGURATION,
            c.TYPES.PAGECONFIGURATIONSET,
            c.TYPES.PAGECONFIGURATIONSETCONTAINER,
            c.TYPES.PAGEREGION,
            c.TYPES.PUBLISHSET,
            c.TYPES.PUBLISHSETCONTAINER,
            c.TYPES.REFERENCE,
            c.TYPES.ROLE,
            c.TYPES.SCRIPTFORMAT,
            c.TYPES.SHAREDFIELD,
            c.TYPES.SITE,
            c.TYPES.SITEDESTINATIONCONTAINER,
            c.TYPES.SYMLINK,
            c.TYPES.TARGET,
            c.TYPES.TEMPLATE,
            c.TYPES.TEXTBLOCK,
            c.TYPES.TRANSPORTDB,
            c.TYPES.TRANSPORTFS,
            c.TYPES.TRANSPORTFTP,
            c.TYPES.TRANSPORTCONTAINER,
            c.TYPES.USER,
            c.TYPES.WORDPRESSCONNECTOR,
            c.TYPES.WORKFLOW,
            c.TYPES.WORKFLOWDEFINITION,
            c.TYPES.WORKFLOWDEFINITIONCONTAINER,
            c.TYPES.XHTMLDATADEFINITIONBLOCK,
            c.TYPES.XMLBLOCK,
            c.TYPES.XSLTFORMAT
        ]);
        _RequestService_url.set(this, void 0);
        _RequestService_auth.set(this, void 0);
        _RequestService_message.set(this, void 0);
        _RequestService_success.set(this, void 0);
        _RequestService_reply.set(this, void 0);
        _RequestService_audits.set(this, void 0);
        _RequestService_commands.set(this, void 0);
        __classPrivateFieldSet(this, _RequestService_url, url, "f");
        __classPrivateFieldSet(this, _RequestService_auth, auth, "f");
        __classPrivateFieldSet(this, _RequestService_message, "", "f");
        __classPrivateFieldSet(this, _RequestService_success, "", "f");
        __classPrivateFieldSet(this, _RequestService_reply, "", "f");
        __classPrivateFieldSet(this, _RequestService_commands, [], "f");
    }
    apiOperation(command, params = null) {
        return __awaiter(this, void 0, void 0, function* () {
            var options = {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${__classPrivateFieldGet(this, _RequestService_auth, "f").getToken()}`
                },
                body: JSON.stringify(params)
            };
            console.log(command);
            console.log(options);
            console.log(params);
            var response = yield fetch(command, options);
            var json = yield response.json();
            return json;
        });
    }
    retrieve(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var property = c.propertyTypeMap[id.type];
            var asset = yield this.read(id);
            if (typeof __classPrivateFieldGet(this, _RequestService_reply, "f").asset != undefined) {
                console.log(__classPrivateFieldGet(this, _RequestService_reply, "f").asset);
                return __classPrivateFieldGet(this, _RequestService_reply, "f").asset.property;
            }
            return null;
        });
    }
    read(id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let command = __classPrivateFieldGet(this, _RequestService_url, "f") + 'read';
            let formatId = {
                "identifier": id
            };
            __classPrivateFieldSet(this, _RequestService_reply, yield this.apiOperation(command, formatId), "f");
            __classPrivateFieldSet(this, _RequestService_success, __classPrivateFieldGet(this, _RequestService_reply, "f").success, "f");
            return (_a = __classPrivateFieldGet(this, _RequestService_reply, "f").asset) !== null && _a !== void 0 ? _a : null;
        });
    }
    isHexString(string) {
        let pattern = /[0-9a-f]{32}/g;
        let matches = [...string.matchAll(pattern)];
        if (typeof matches[0] == string) {
            return true;
        }
        return false;
    }
    createId(type, idPath, siteName = null) {
        let id = {
            type: type
        };
        if (this.isHexString(idPath)) {
            id['id'] = idPath;
        }
        else {
            id['path'] = {
                path: idPath,
            };
            if (idPath == "/") {
                id.path.path = "%252F";
            }
            id.path.siteName = siteName;
        }
        id.type = type;
        return id;
    }
    createIdString(id) {
        if (typeof id.id != undefined) {
            var idString = id.type + '/' + id.id;
        }
        else if (typeof id.path.path != undefined) {
            var path = id.path.path;
            if (path != "%252F") {
                path = path.replace(" ", "%20");
            }
            if (id.type == "role" ||
                id.type == "site" ||
                id.type == "group" ||
                id.type == "user") {
                idString = id.type + '/' + path;
            }
            else {
                idString = id.type + '/' + id.path.siteName + '/' + path;
            }
        }
        else {
            idString = "";
            idString = idString.replace("//", "/");
            return idString;
        }
    }
}
_RequestService_types = new WeakMap(), _RequestService_properties = new WeakMap(), _RequestService_url = new WeakMap(), _RequestService_auth = new WeakMap(), _RequestService_message = new WeakMap(), _RequestService_success = new WeakMap(), _RequestService_reply = new WeakMap(), _RequestService_audits = new WeakMap(), _RequestService_commands = new WeakMap();
//# sourceMappingURL=RequestService.js.map