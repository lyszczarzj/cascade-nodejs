#! /usr/bin/env node
'use strict';
import { RequestService, Auth, Factory } from "./internal.js";
console.log('running');
var testAsset = Factory.getAsset(new RequestService('https://grayson.cascadecms.com/api/v1/', Auth.getInstance()), "page", "test-page", "grayson.edu");
console.log(testAsset);
//# sourceMappingURL=index.js.map