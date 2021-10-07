#! /usr/bin/env node
'use strict';
import './assets/factory.js';
import Factory from './assets/factory.js';
import RequestService from './RequestService.js';
import Auth from './auth.js';
console.log('running');
var testAsset = Factory.getAsset(new RequestService('https://grayson.cascadecms.com/api/v1/', Auth.getInstance()), "page", "test-page", "grayson.edu");
console.log(testAsset);
//# sourceMappingURL=index.js.map