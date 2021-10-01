#! /usr/bin/env node
'use strict';
import Page from './assets/Page.js';
import RequestService from './RequestService.js';
import Auth from './auth.js';
console.log('running');
console.log(process.env.CASC_APIKEY);
var test = new Page(new RequestService('page', 'https://grayson.cascadecms.com/api/v1/', Auth.getInstance()), {
    path: {
        siteName: "grayson.edu",
        path: "test-page"
    },
    type: "page"
});
console.log(test);
export default class Cascade {
    constructor() {
    }
}
Cascade.URL = 'https://grayson.cascadecms.com/api/v1/';
//# sourceMappingURL=index.js.map