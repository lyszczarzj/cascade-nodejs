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
var _a, _Auth_apiToken, _Auth_instance;
import * as fs from 'fs';
export default class Auth {
    constructor() {
        _Auth_apiToken.set(this, void 0);
        if (!fs.readFileSync('./config.json', 'utf8')) {
            throw new Error("Cannot read auth file!!!!");
        }
        else {
            let json = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
            __classPrivateFieldSet(this, _Auth_apiToken, json.authorization.apiKey, "f");
        }
    }
    static getInstance() {
        if (__classPrivateFieldGet(this, _a, "f", _Auth_instance)) {
            return __classPrivateFieldGet(this, _a, "f", _Auth_instance);
        }
        else {
            __classPrivateFieldSet(this, _a, new Auth(), "f", _Auth_instance);
            return __classPrivateFieldGet(this, _a, "f", _Auth_instance);
        }
    }
    static reload() {
        __classPrivateFieldSet(this, _a, new Auth(), "f", _Auth_instance);
        return __classPrivateFieldGet(this, _a, "f", _Auth_instance);
    }
    getToken() {
        return __classPrivateFieldGet(this, _Auth_apiToken, "f");
    }
}
_a = Auth, _Auth_apiToken = new WeakMap();
_Auth_instance = { value: void 0 };
//# sourceMappingURL=Auth.js.map