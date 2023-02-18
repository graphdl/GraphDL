# GraphDL - Graph Definition Language



```yaml
User:
 Name:  String
 Email: Email
 Image: URL
 Posts: [Post.Author]
 
Post:
 _id:         slugify(Title)
 Title:       string
 Description: string
 Tags:        [string]
 Content:     markdown
 CreatedAt:   createdAt()
 CreatedBy:   createdBy()
 Author:      User.Email
```


```yaml
Country:
 _plural: Countries
 _source: https://json.fyi/countries.json
 _id:     cca2
 borders: [Country.cca3]
```



