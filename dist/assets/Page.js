import Linkable from "./Linkable.js";
import * as c from "../constants.js";
export default class Page extends Linkable {
    constructor(service, identifier) {
        super(service, identifier);
    }
}
Page.TYPE = c.TYPES.PAGE;
//# sourceMappingURL=Page.js.map