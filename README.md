# GraphDL - Graph Definition Language


```yaml
User:
 name:  string
 email: email
 image: url
 posts: [Post.Author]
 
Post:
 _id:         slugify(Title)
 _name:       title
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
 _name:   name.common
 borders: [Country.cca3]
 
Colo:
 _id:     iata
 _source: https://speed.cloudflare.com/locations
 _name:   ${iata} - ${city}, ${cca2->name.common}, ${region}
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
 _name:        ${method} ${url} ${ip} ${cf.city} ${cf.region} ${cf.country->name.common} ${cf.asOrganization}
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
 _name: territoryCode
 employeeId: Employee
 territoryCode: Territory.territoryCode
 
OrderDetail:
 _name: ${quantity} ${productId->name}
 orderId:   Order
 productId: Product
 
Product:
 _name:      productName
 categoryId: Category
 supplierId: Supplier
 
SalesOrder:
 _name: ${date(orderDate)} - ${count(<-OrderDetail)} Items
 customerId: Customer
 employeeId: Employee
 shipperId:  Shipper

Shipper:
 _name: companyName
 
Supplier:
 _name: companyName
 
Region:
 _name: regiondescription
 
Territory:
 regionId: Region
```

```yaml
Vehicle:
 _id: vin
 vin: string.length(17)
 year: Year
 make: Make
 model: Model
 trim: Trim
 style: Style
 
Make:
 _id: slugify(name)
 name: string
 logo: https://cdn.driv.ly/logos/:id.png
```
