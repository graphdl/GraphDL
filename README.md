# GraphDL - Graph Definition Language



```yaml
User:
 Name:  String
 Email: Email
 Image: URL
 Posts: [Post.Author]
 
Post:
 Title:       String
 Description: String
 Tags:        [String]
 Content:     Markdown
 CreatedAt:   CreatedAt()
 CreatedBy:   CreatedBy()
 Author:      User.Email
```


```yaml
Country:
 _plural: Countries
 _source: https://json.fyi/countries.json
 _id:     cca2
 borders: [Country.cca3]
```



