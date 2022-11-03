# E-Commerce Backend        
This application was built to deomnstrate my knowledge of SQL and API routes. This tool is the backend JS and SQL of an E-Commerce website. It allows for adding of Products, Categories, and tags throu API. It will also allow you to Get and Update all products, tags, and categories.


## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Features](#features)
- [Contact](#questions)



## Installation
This application is deployed to heroku so you can review the functionality. Access: 

## Usage
Users will have to run API calls to interact with the application. The Application supports GET, POST, PUT, and DELETE methods. 


API Routes
----------
Products:

/api/products

/api/products/:id 

----------
Tags:

/api/tags

/api/tags/:id 

----------
Categories:

/api/categories 

/api/categories/:id 

----------

Example json for post routes
----------
Categories:

{"category_name":"shirts"} 

----------
Tags:

{"tag_name":"t-shirt"} 

----------
Products:

{
"product_name": "Basketball", 
"price": 200.00, 
"stock": 3, 
"category_id":"1", 
"tagIds": [1, 2, 3, 4]
}

## Contribution
If you have additional input for this application or would like to use it please contact the developer (contact information below)

## Features
This application uses Express.js to run its server, dotenv for sql server protection, and Sequalize to handle data 

Full NPM Package list -     
    "dotenv": "^8.2.0"
    "express": "^4.17.1"
    "mysql2": "^2.1.0"
    "sequelize": "^5.21.7"

## Questions
Github Username: Avialmonanay
If you have any additional questions please email me at: rexxmadsen@gmail.com


