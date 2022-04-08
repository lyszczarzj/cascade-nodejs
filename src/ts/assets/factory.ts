// import * as c from "../constants.js"
// import Asset from "../assets/Asset.js"
// import Page from "../assets/Page.js"
// import RequestService from "../RequestService.js"

import {Asset, Page, RequestService, c} from '../internal.js'

export default class Factory {
    static #instance?: Factory;


  /*  static mapping = new Map([
        [c.TYPES.ASSETFACTORY, Asset],
        [c.TYPES.ASSETFACTORYCONTAINER, Asset],
        [c.TYPES.CLOUDTRANSPORT, Asset],
        [c.TYPES.CONNECTORCONTAINER, Asset],
        [c.TYPES.CONTENTTYPE, Asset],
        [c.TYPES.CONTENTTYPECONTAINER, Asset],
        [c.TYPES.DATADEFINITION, Asset],
        [c.TYPES.DATADEFINITIONCONTAINER, Asset],
        [c.TYPES.DESTINATION, Asset],
        [c.TYPES.FACEBOOKCONNECTOR, Asset],
        [c.TYPES.FEEDBLOCK, Asset],
        [c.TYPES.FILE, Asset],
        [c.TYPES.FOLDER, Asset],
        [c.TYPES.GOOGLEANALYTICSCONNECTOR, Asset],
        [c.TYPES.GROUP, Asset],
        [c.TYPES.INDEXBLOCK, Asset],
        [c.TYPES.METADATASET, Asset],
        [c.TYPES.METADATASETCONTAINER, Asset],
        [c.TYPES.PAGE, Page],
        [c.TYPES.PAGECONFIGURATIONSET, Asset],
        [c.TYPES.PAGECONFIGURATIONSETCONTAINER, Asset],
        [c.TYPES.PUBLISHSET, Asset],
        [c.TYPES.PUBLISHSETCONTAINER, Asset],
        [c.TYPES.REFERENCE, Asset],
        [c.TYPES.ROLE, Asset],
        [c.TYPES.SCRIPTFORMAT, Asset],
        [c.TYPES.SHAREDFIELD, Asset],
        [c.TYPES.SHAREDFIELDCONTAINER, Asset],
        [c.TYPES.SITE, Asset],
        [c.TYPES.SITEDESTINATIONCONTAINER, Asset],
        [c.TYPES.SYMLINK, Asset],
        [c.TYPES.TEMPLATE, Asset],
        [c.TYPES.TEXTBLOCK, Asset],
        [c.TYPES.TRANSPORTCLOUD, Asset],
        [c.TYPES.TRANSPORTDB, Asset],
        [c.TYPES.TRANSPORTFS, Asset],
        [c.TYPES.TRANSPORTFTP, Asset],
        [c.TYPES.TRANSPORTCONTAINER, Asset],
        [c.TYPES.TWITTERCONNECTOR, Asset],
        [c.TYPES.USER, Asset],
        [c.TYPES.WORDPRESSCONNECTOR, Asset],
        [c.TYPES.WORKFLOWDEFINITION, Asset],
        [c.TYPES.WORKFLOWDEFINITIONCONTAINER, Asset],
        [c.TYPES.WORKFLOWEMAIL, Asset],
        [c.TYPES.WORKFLOWEMAILCONTAINER, Asset],
        [c.TYPES.XHTMLDATADEFINITIONBLOCK, Asset],
        [c.TYPES.XMLBLOCK, Asset],
        [c.TYPES.XSLTFORMAT, Asset]

    ])*/

    static getAsset(service: RequestService, type: string, idPath: string, siteName: string = null): Asset {
        var exists = Object.values(c.TYPES).includes(type)
        if (!exists) {
            throw new Error('No Such Type' + type + 'Found');
        }
        const mapping = new Map([
            //[c.TYPES.ASSETFACTORY, Asset],
            //[c.TYPES.ASSETFACTORYCONTAINER, Asset],
            //[c.TYPES.CLOUDTRANSPORT, Asset],
            //[c.TYPES.CONNECTORCONTAINER, Asset],
            //[c.TYPES.CONTENTTYPE, Asset],
            //[c.TYPES.CONTENTTYPECONTAINER, Asset],
            //[c.TYPES.DATADEFINITION, Asset],
            //[c.TYPES.DATADEFINITIONCONTAINER, Asset],
            //[c.TYPES.DESTINATION, Asset],
            //[c.TYPES.FACEBOOKCONNECTOR, Asset],
            //[c.TYPES.FEEDBLOCK, Asset],
            //[c.TYPES.FILE, Asset],
            //[c.TYPES.FOLDER, Asset],
            //[c.TYPES.GOOGLEANALYTICSCONNECTOR, Asset],
            //[c.TYPES.GROUP, Asset],
            //[c.TYPES.INDEXBLOCK, Asset],
            //[c.TYPES.METADATASET, Asset],
            //[c.TYPES.METADATASETCONTAINER, Asset],
            [c.TYPES.PAGE, Page],
            //[c.TYPES.PAGECONFIGURATIONSET, Asset],
            //[c.TYPES.PAGECONFIGURATIONSETCONTAINER, Asset],
            //[c.TYPES.PUBLISHSET, Asset],
            //[c.TYPES.PUBLISHSETCONTAINER, Asset],
            //[c.TYPES.REFERENCE, Asset],
            //[c.TYPES.ROLE, Asset],
            //[c.TYPES.SCRIPTFORMAT, Asset],
            //[c.TYPES.SHAREDFIELD, Asset],
            //[c.TYPES.SHAREDFIELDCONTAINER, Asset],
            //[c.TYPES.SITE, Asset],
            //[c.TYPES.SITEDESTINATIONCONTAINER, Asset],
            //[c.TYPES.SYMLINK, Asset],
            //[c.TYPES.TEMPLATE, Asset],
            //[c.TYPES.TEXTBLOCK, Asset],
            //[c.TYPES.TRANSPORTCLOUD, Asset],
            //[c.TYPES.TRANSPORTDB, Asset],
            //[c.TYPES.TRANSPORTFS, Asset],
            //[c.TYPES.TRANSPORTFTP, Asset],
            //[c.TYPES.TRANSPORTCONTAINER, Asset],
            //[c.TYPES.TWITTERCONNECTOR, Asset],
            //[c.TYPES.USER, Asset],
            //[c.TYPES.WORDPRESSCONNECTOR, Asset],
            //[c.TYPES.WORKFLOWDEFINITION, Asset],
            //[c.TYPES.WORKFLOWDEFINITIONCONTAINER, Asset],
            //[c.TYPES.WORKFLOWEMAIL, Asset],
            //[c.TYPES.WORKFLOWEMAILCONTAINER, Asset],
            //[c.TYPES.XHTMLDATADEFINITIONBLOCK, Asset],
            //[c.TYPES.XMLBLOCK, Asset],
            //[c.TYPES.XSLTFORMAT, Asset]
        ])

        let Constructor = mapping.get(type)
        try {
            return new Constructor(service, service.createId(type, idPath, siteName))
           // return new classname(service, service.createId(type, idPath, siteName))
        } catch (e) {
            console.log(e.message)
            throw new Error(`Null Asset: ${idPath}`)
        }
    }
}

