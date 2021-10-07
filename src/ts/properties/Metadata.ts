import RequestService from "../RequestService.js"
import Property from "./Property.js"

export default class Metadata extends Property {
    #author: string
    #displayName: string
    #endDate: string
    #keywords: string
    #metaDescription: string
    #reviewDate: string
    #startDate: string
    #summary: string
    #teaser: string
    #title: string
    #dynamicFields: any
    #dynamicFieldNames: any
    #service: RequestService
    #metadataSetId: string
    #hostAsset: string
}