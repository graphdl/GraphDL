# GraphDL - Graph Definition Language


```yaml
User:
 name:  string
 email: email
 image: url
 posts: [Post.Author]
 
Post:
 _id:         slugify(Title)
 title:       string
 description: string
 tags:        [string]
 content:     markdown
 createdAt:   createdAt()
 createdBy:   createdBy()
 author:      User.Email
```

```yaml
_visibility: public

Country:
 _plural: Countries
 _source: https://json.fyi/countries.json
 _id:     cca2
 borders: [Country.cca3]
 
Colo:
 _id:     iata
 _source: https://speed.cloudflare.com/locations
 cca2:    Country.cca2
 region:  Continent._id
 iata:    Airport.iata
 
Airport:
 _source: https://json.fyi/airports.json
 _id:     icao
 tz:      TimeZone._id
 country: Country.cca2
 
Request:
 _id:          ${headers.cf-ray}-${headers.cf-ray}
 _name:        ${method} ${url} ${ip} ${cf.city} ${cf.region} ${cf.region} ${cf.country->name} ${cf.asOrganization}
 cf.colo:      Colo.iata
 cf.country:   Country.cca2
 coordinates:  GeoPoint(cf.latitude,cf.longitude)
 cf.timezone:  TimeZone._id
```

```yaml
_seed: https://json.fyi/northwind.json
_id: entityId
_constraints: true

Category:
 _name: ${categoryName} - ${description}

Customer:
 _name: companyName
 
Employee:
 _name: ${firstname} ${lastname}, ${title}

EmployeeTerritory:
 employeeId: Employee
 territoryCode: Territory.territoryCode
 
OrderDetail:
 orderId:   Order
 productId: Product
 
Product: 
 categoryId: Category
 supplierId: Supplier
 
SalesOrder:
 customerId: Customer
 employeeId: Employee
 shipperId:  Shipper
 
Territory:
 regionId: Region
```

