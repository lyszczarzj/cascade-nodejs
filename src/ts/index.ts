#! /usr/bin/env node
'use strict'
import fetch from 'node-fetch';
import * as Struc from './struct.js';
import Asset from './assets/Asset.js';
import Page from './assets/Page.js';
import RequestService from './RequestService.js';
import Auth from './auth.js';


console.log('running');
//import dotenv from 'dotenv'

console.log(process.env.CASC_APIKEY);

var test = new Page(new RequestService('page', 'https://grayson.cascadecms.com/api/v1/', Auth.getInstance()),{
  path: {
    siteName:"grayson.edu",
    path:"test-page"
  },
  type: "page"
});

console.log(test)

export default class Cascade {
  //main entry point
  static URL='https://grayson.cascadecms.com/api/v1/';

  constructor() {
   // this.requestService = new RequestService()
  //  this.auth = {}
  }

/*  read(identifier: Identifier): json {
  return this.requestService.read(identifier);
  } */


  /*
  createAsset(asset, type: string, path: string, site: string) {
    try {
      return this.getAsset(type, path, site)
    } catch(e) {
        const response = fetch(URL + 'create', {
        method: "POST",
        headers:{ 
          Authorization: "Bearer" 
        },
        body: JSON.stringify({asset: asset})
        }) 

        return response.then(r => r.json()).then(data => {
          if (data.success) {
            console.log('success');
          } else {
              console.log('error occured during creation ' + data.message)
          }
        })  
      }
    }

  getAsset(type:string, path:string, site:string) {
    try {
      const response = fetch(URL + 'read', {
        method: "POST",
        headers:{ 
          Authorization: "Bearer"
        },
        body: JSON.stringify({
          identifier: {
            type: type,
            path: {
              siteName: site,
              path: path
            }
          }
        })
      })
      return response 
    } catch (e) {
      e.message
    }
  }

  createFile(site:string, path:string, name:string, text="", data=null) {
    const file = {
          name: name,
          siteName: site,
          parentFolderPath: path
        }

    file[text] = text

    if (data) {
      file[data] = data
    }

    const asset = {}
    asset['file'] = file

    return this.createAsset(asset, 'file', path + name, site)
  }
*/




}