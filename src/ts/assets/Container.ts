import RequestService from "../RequestService.js";
import ContainedAsset from "./ContainedAsset.js";
import * as Struct from "../struct.js"
import Asset from "./Asset.js";
import Child from "../properties/Child.js";

export default class Container extends ContainedAsset {
    #children: Array<Child>;
    #containerChildrenIds: Array<string>;
    
    constructor(service: RequestService, id: Struct.Identifier) {
        super(service, id);
        this.#children = [];
        this.#containerChildrenIds = [];

        if (typeof this.getProperty().children != undefined) {
            this.processChildren();
        }
    }

    contains(asset: Asset) : boolean {
        return this.isAncestorOf(asset);
    }

    deleteAllChildren() {
      return 0;
    }

    isAncestorOf(asset: Asset): boolean {
        if (!(asset instanceof ContainedAsset)) {
            throw new Error('The Asset is not a type of contained object');
        }

        if (this.isParentOf(asset)) {
            return true;
        } else if (asset.getParentContainer().getPath() == "/") {
            return false;
        } else if (this.isAncestorOf(asset.getParentContainer())) {
            return true;
        } else {
        return false;
        }
    }
    isParentOf(asset: Asset): boolean {
        if (!(asset instanceof ContainedAsset)) {
            throw new Error('The Asset is not a type of contained object');
        }
        return asset.isChildOf(this);
    }

    private processChildren() {
        let children = this.getProperty().children;

        if(!children.isArray()) {
            children = Array(children)
        }
        children.forEach((child: any) => {
            this.#children.push(new Child(child));

            if (child.type == this.getType()) {
                this.#containerChildrenIds.push(child.id);
            }
        })
    }

}