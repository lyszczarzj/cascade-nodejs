#! /usr/bin/env node
'use strict';
import * as c from './constants.js';
import Asset from './assets/Asset.js';
import RequestService from './RequestService.js';
import Auth from './auth.js';
console.log('running');
console.log(c.TYPES.PAGE);
var testAsset = Asset.getAsset(new RequestService('https://grayson.cascadecms.com/api/v1/', Auth.getInstance()), "page", "test-page", "grayson.edu");
//# sourceMappingURL=index.js.map