export interface Northwind {
    category:          Category[];
    customer:          Customer[];
    employee:          Employee[];
    employeeTerritory: EmployeeTerritory[];
    orderDetail:       OrderDetail[];
    product:           Product[];
    region:            Region[];
    salesOrder:        SalesOrder[];
    shipper:           Shipper[];
    supplier:          Customer[];
    territory:         Territory[];
}

export interface Category {
    picture:      null;
    entityID:     number;
    description:  string;
    categoryName: string;
}

export interface Customer {
    fax:          null | string;
    city:         string;
    email:        null;
    phone:        string;
    mobile?:      null;
    region:       null | string;
    address:      string;
    country:      Country;
    entityID:     number;
    postalCode:   string;
    companyName:  string;
    contactName:  string;
    contactTitle: string;
    homePage?:    null;
}

export enum Country {
    Argentina = "Argentina",
    Australia = "Australia",
    Austria = "Austria",
    Belgium = "Belgium",
    Brazil = "Brazil",
    Canada = "Canada",
    Denmark = "Denmark",
    Finland = "Finland",
    France = "France",
    Germany = "Germany",
    Ireland = "Ireland",
    Italy = "Italy",
    Japan = "Japan",
    Mexico = "Mexico",
    Netherlands = "Netherlands",
    Norway = "Norway",
    Poland = "Poland",
    Portugal = "Portugal",
    Singapore = "Singapore",
    Spain = "Spain",
    Sweden = "Sweden",
    Switzerland = "Switzerland",
    Uk = "UK",
    Usa = "USA",
    Venezuela = "Venezuela",
}

export interface Employee {
    city:            string;
    email:           null;
    mgrID:           number | null;
    notes:           null;
    phone:           string;
    photo:           null;
    title:           string;
    mobile:          null;
    region:          null | string;
    address:         string;
    country:         Country;
    entityID:        number;
    hireDate:        Date;
    lastname:        string;
    birthDate:       Date;
    extension:       null;
    firstname:       string;
    photoPath:       null;
    postalCode:      string;
    titleOfCourtesy: string;
}

export interface EmployeeTerritory {
    entityID:      number;
    employeeID:    number;
    territoryCode: string;
}

export interface OrderDetail {
    orderID:   number;
    discount:  number;
    entityID:  number;
    quantity:  number;
    productID: number;
    unitPrice: number;
}

export interface Product {
    entityID:        number;
    unitPrice:       number;
    categoryID:      number;
    supplierID:      number;
    productName:     string;
    discontinued:    string;
    reorderLevel:    null;
    unitsInStock:    null;
    unitsOnOrder:    null;
    quantityPerUnit: null;
}

export interface Region {
    entityID:          number;
    regiondescription: string;
}

export interface SalesOrder {
    freight:        number;
    entityID:       number;
    shipCity:       string;
    shipName:       string;
    orderDate:      Date;
    shipperID:      number;
    customerID:     number;
    employeeID:     number;
    shipRegion:     null | string;
    shipAddress:    string;
    shipCountry:    Country;
    shippedDate:    Date | null;
    requiredDate:   Date;
    shipPostalCode: string;
}

export interface Shipper {
    phone:       string;
    entityID:    number;
    companyName: string;
}

export interface Territory {
    entityID:             number;
    regionID:             number;
    territoryCode:        string;
    territorydescription: string;
}
