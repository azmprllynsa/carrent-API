<h2 align="center">Carrent API</h2>

[![Node JS](https://img.shields.io/badge/Dependencies-Express%20JS-green)](https://nodejs.org/en/)
![GitHub repo size](https://img.shields.io/github/repo-size/azmprllynsa/carrent-API)
![GitHub contributors](https://img.shields.io/github/contributors/azmprllynsa/carrent-API)
![GitHub stars](https://img.shields.io/github/stars/azmprllynsa/carrent-API?style=social)
![GitHub forks](https://img.shields.io/github/forks/azmprllynsa/carrent-API?style=social)


<p align="center">
  <a href="https://nodejs.org/" target="blank">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

## Table of Contents
* [Prerequiste](#Prerequiste)
* [Installation](#Installation)
* [Create Environment Variable](#create-environment-variable)
* [Start Development Server](#Start-Development-Server)
* [Postman Collection](#Postman-Collection)
* [API Endpoint](#API-Endpoint)
* [About Project](#About-Project)
* [Related Project](#Related-Project)
* [Contributing](#Contributing)
* [Contact](#Contact)


## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/).
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/)
- Redis - Download and Install [Redis](https://redis.io/)


## Installation
### Clone
```
$ git clone https://github.com/azmprllynsa/carrent-API.git
$ cd carrent-API
$ npm install
```

## Create Environment Variable

```
DB_HOST=YOUR_DB_HOST
DB_USER=YOUR_DB_USER
DB_PASSWORD=YOUR_DB_PASSWORD
DB_NAME=YOUR_TABLE_NAME
PORT=YOUR_PORT
PORT_REDIS = YOUR_REDIS_PORT // default=6879
SECRET_KEY = YOUR_SECRET_KEY
URL_EMAIL_CONFIRM = YOUR_EMAIL_VALIDATION_PAGE_FRONTEND
EMAIL = YOUR_EMAIL_CONFIRMATION
PASSWORD = YOUR_EMAIL_PASSWORD
```

### Start Development Server
```
$ npm run serve
```
## Link Collection Postman
[Click Here](https://www.getpostman.com/collections/43867df9c1ee2d3340ae)

## API Endpoint
### User Endpoint
| No  | HTTP Method | URI                                 | Operation                                  |
| --- | ----------- | ----------------------------------- | ------------------------------------------ |
| 1   | GET         | /api/v1/carrent/user/               | Get all users data                         |
| 2   | GET         | /api/v1/carrent/user/:user_id       | Get user’s data by it’s ID                 |
| 3   | POST        | /api/v1/carrent/user/register       | Register new user                          |
| 4   | POST        | /api/v1/carrent/user/login          | Login user                                 |
| 9   | PATCH       | /api/v1/carrent/user/:user_id       | Edit or update the user’s data by it’s ID  |
| 10  | DELETE      | /api/v1/carrent/user/:user_id       | Delete the user by it’s ID                 |

### Product Endpoint
| No  | HTTP Method | URI                                  | Operation                                 |
| --- | ----------- | ------------------------------------ | ----------------------------------------- |
| 1   | GET         | /api/v1/carrent/product/             | Get all products data                     |
| 2   | GET         | /api/v1/carrent/product/:product_id  | Get product’s data by it’s ID             |
| 3   | GET         | /api/v1/carrent/product/?page=1      | Get product’s data on the 1st page        |
| 4   | GET         | /api/v1/carrent/product/?search=title| Search product data by title keyword      |
| 5   | GET         | /api/v1/carrent/product/?sortBy=title| Sort product data by the title            |
| 6   | GET         | /api/v1/carrent/product/?sortBy=genre| Sort product data by the category         |
| 7   | POST        | /api/v1/carrent/product/             | Insert new product data                   |
| 8   | PATCH       | /api/v1/carrent/product/:product_id  | Update the product’s data by it’s ID      |
| 9   | DELETE      | /api/v1/carrent/product/:product_id  | Delete the product by it’s ID             |

### Order Endpoint
| No  | HTTP Method | URI                                 | Operation                                  |
| --- | ----------- | ----------------------------------- | ------------------------------------------ |
| 1   | GET         | /api/v1/order                       | Get all orders data                        |
| 1   | GET         | /api/v1/order/:user_id              | Get all orders data by user ID             |
| 2   | GET         | /api/v1/order/:order_id             | Get order’s data by order ID               |
| 9   | POST        | /api/v1/order/                      | Insert new order data                      |
| 9   | PATCH       | /api/v1/order/:order_id             | Edit or update the order’s data by it’s ID |
| 10  | DELETE      | /api/v1/order/:order_id             | Delete the order by it’s ID                |

## About Project
Carrent is a project, based on one of daily needs in Indonesia, a car. You can easily rent a car, with easy payment, easy to borrow, and easy to return.
It's API made for Carrent using Node Js and Express Js

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
1. Create your Feature Branch  ```git checkout -b [feature]```
2. Commit your Changes ```git commit -m 'Add some feature'```
3. Push to the Branch ```git push origin [feature]```
4. Open a Pull Request

## Related Project
* [`Frontend Carrent2`](https://github.com/azmprllynsa/carrent-vuejs)

## Contributors
<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/HiRahmat-Dev/">
          <img width="150" src="https://avatars2.githubusercontent.com/u/55150659?s=460&u=c7171bb4128787c303efdce0d62bc86289f1211b&v=4" alt="Rahmat Hidayatullah"><br/>
          <b>Rahmat Hidayatullah</b>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/akbarism">
          <img width="150" src="https://avatars3.githubusercontent.com/u/59020048?s=400&u=3b5166c489574eedef29b414cd18b457bcc6fad3&v=4" alt="Akbar Ismail"><br/>
          <b>Akbar Ismail</b>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/azmprllynsa">
          <img width="150" src="https://avatars1.githubusercontent.com/u/60286175?s=400&v=4" alt="azmprllynsa"><br/>
          <b>azmprllynsa</b>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/m-joseph27">
          <img width="150" src="https://avatars2.githubusercontent.com/u/60948526?s=400&u=c258f85ec35ccfda6ce3911dae79d45e335088b3&v=4" alt="Muhammad Yusuf"><br/>
          <b>Muhammad Yusuf</b>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/haras94">
          <img width="150" src="https://avatars2.githubusercontent.com/u/62143618?s=400&u=2e76db88db6de5ba0dddfa79c274c8e04f5e8f4a&v=4" alt="Harun"><br/>
          <b>Harun</b>
        </a>
      </td>
    </tr>
  </table>
</center>
---
Copyright © 2020 [Azmi Prilly Naisa](https://github.com/azmprllynsa/)
