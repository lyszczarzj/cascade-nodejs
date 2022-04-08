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
var _Container_children, _Container_containerChildrenIds;
import { ContainedAsset, Child } from "../internal.js";
export default class Container extends ContainedAsset {
    constructor(service, id) {
        super(service, id);
        _Container_children.set(this, void 0);
        _Container_containerChildrenIds.set(this, void 0);
        __classPrivateFieldSet(this, _Container_children, [], "f");
        __classPrivateFieldSet(this, _Container_containerChildrenIds, [], "f");
        if (typeof this.getProperty().children != undefined) {
            this.processChildren();
        }
    }
    contains(asset) {
        return this.isAncestorOf(asset);
    }
    deleteAllChildren() {
        return 0;
    }
    isAncestorOf(asset) {
        if (!(asset instanceof ContainedAsset)) {
            throw new Error('The Asset is not a type of contained object');
        }
        if (this.isParentOf(asset)) {
            return true;
        }
        else if (asset.getParentContainer().getPath() == "/") {
            return false;
        }
        else if (this.isAncestorOf(asset.getParentContainer())) {
            return true;
        }
        else {
            return false;
        }
    }
    isParentOf(asset) {
        if (!(asset instanceof ContainedAsset)) {
            throw new Error('The Asset is not a type of contained object');
        }
        return asset.isChildOf(this);
    }
    processChildren() {
        let children = this.getProperty().children;
        if (!children.isArray()) {
            children = Array(children);
        }
        children.forEach((child) => {
            __classPrivateFieldGet(this, _Container_children, "f").push(new Child(child));
            if (child.type == this.getType()) {
                __classPrivateFieldGet(this, _Container_containerChildrenIds, "f").push(child.id);
            }
        });
    }
}
_Container_children = new WeakMap(), _Container_containerChildrenIds = new WeakMap();
//# sourceMappingURL=Container.js.map