declare module "@salesforce/apex/PropertyController.getPropertyList" {
  export default function getPropertyList(param: {searchKey: any, minPrice: any, maxPrice: any, numberBedrooms: any, numberBathrooms: any, visualSearchKey: any}): Promise<any>;
}
declare module "@salesforce/apex/PropertyController.getPropertyListPage" {
  export default function getPropertyListPage(param: {searchKey: any, minPrice: any, maxPrice: any, numberBedrooms: any, numberBathrooms: any, visualSearchKey: any, pageSize: any, pageNumber: any}): Promise<any>;
}
declare module "@salesforce/apex/PropertyController.findById" {
  export default function findById(param: {propertyId: any}): Promise<any>;
}
declare module "@salesforce/apex/PropertyController.getAvailableProperties" {
  export default function getAvailableProperties(): Promise<any>;
}
declare module "@salesforce/apex/PropertyController.getAtRiskProperties" {
  export default function getAtRiskProperties(): Promise<any>;
}
declare module "@salesforce/apex/PropertyController.getComparableProperties" {
  export default function getComparableProperties(param: {propertyId: any}): Promise<any>;
}
declare module "@salesforce/apex/PropertyController.getSimilarProperties" {
  export default function getSimilarProperties(param: {propertyId: any, bedrooms: any, price: any, searchCriteria: any}): Promise<any>;
}
declare module "@salesforce/apex/PropertyController.getPictures" {
  export default function getPictures(param: {propertyId: any}): Promise<any>;
}
