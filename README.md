Конечно! Я добавил информацию о базе данных PostgreSQL в раздел "Frameworks and Libraries" и упомянул её в общем обзоре. Вот обновленный `README.md` файл:

```markdown
# ChâteRidée API Documentation

## Overview

This documentation provides an overview of the API endpoints for ChâteRidée, a French restaurant. It covers the functionality of each endpoint, the required and optional parameters, and the expected responses. Additionally, it lists the frameworks and libraries used in the project, as well as the database configuration.

## Frameworks, Libraries, and Database

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Minimalist web framework for Node.js.
- **Sequelize**: ORM for SQL databases.
- **Telegraf**: Telegram bot framework.
- **dotenv**: Loads environment variables from a `.env` file.
- **uuid**: For generating unique identifiers.
- **cors**: Middleware for enabling CORS (Cross-Origin Resource Sharing).
- **PostgreSQL**: Open-source relational database management system used for data storage.

## Database Configuration

The project uses PostgreSQL for managing and storing data. Below are the essential configurations for connecting to the PostgreSQL database:

- **Database Host**: `localhost`
- **Database Port**: `5432`
- **Database Name**: `chateridee`
- **Username**: `your_username`
- **Password**: `your_password`

Ensure that you have a `.env` file set up with the following environment variables:

```plaintext
DB_HOST=localhost
DB_PORT=5432
DB_NAME=chateridee
DB_USER=your_username
DB_PASSWORD=your_password
```

## Endpoints

### Category Endpoints

#### Get All Categories

- **Endpoint**: `/AllCategory`
- **Method**: GET
- **Description**: Fetches all categories from the database.
- **Request Body**: None
- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "Category 1"
    },
    ...
  ]
  ```

#### Create a Category

- **Endpoint**: `/createCategory`
- **Method**: POST
- **Description**: Creates a new category.
- **Request Body**:
  ```json
  {
    "name": "Category Name"
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "name": "Category Name"
  }
  ```
- **Error Response**:
  ```json
  {
    "error": "name is required"
  }
  ```

### User Endpoints

#### User Login

- **Endpoint**: `/userLogin`
- **Method**: POST
- **Description**: Authenticates a user with their name, surname, and password.
- **Request Body**:
  ```json
  {
    "name": "John",
    "surName": "Doe",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "name": "John",
    "surName": "Doe",
    ...
  }
  ```
- **Error Response**:
  ```json
  {
    "error": "Name, surname, and password are required"
  }
  ```

#### Create a User

- **Endpoint**: `/createUsers`
- **Method**: POST
- **Description**: Creates a new user.
- **Request Body**:
  ```json
  {
    "name": "John",
    "lastName": "Doe",
    "password": "password123",
    "rePassword": "password123",
    "phoneNumber": "1234567890"
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "name": "John",
    "surName": "Doe",
    "apikey": "uuidv4-generated-key",
    ...
  }
  ```
- **Error Responses**:
  ```json
  {
    "error": "Name is required"
  }
  ```

### Product Endpoints

#### Get Products by Category

- **Endpoint**: `/getProduct/:id`
- **Method**: GET
- **Description**: Retrieves products based on the provided category ID.
- **URL Parameter**: `id` (Category ID)
- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "Product 1",
      "category": 1,
      ...
    },
    ...
  ]
  ```

#### Get Main Product

- **Endpoint**: `/mainProduct/:id`
- **Method**: GET
- **Description**: Fetches a single product by its ID.
- **URL Parameter**: `id` (Product ID)
- **Response**:
  ```json
  {
    "id": 1,
    "name": "Main Product",
    ...
  }
  ```

### Basket Endpoints

#### Add to Basket

- **Endpoint**: `/addToBasket/:id`
- **Method**: POST
- **Description**: Adds a product to the user's basket.
- **URL Parameter**: `id` (Product ID)
- **Headers**: 
  - `api-key` (optional)
  - `user_token` (optional)
- **Response**:
  ```json
  {
    "id": 1,
    "userID": 1,
    "productID": 1,
    ...
  }
  ```

#### Get Basket Items

- **Endpoint**: `/basket`
- **Method**: GET
- **Description**: Retrieves items in the user's basket.
- **Headers**: 
  - `api-key` (optional)
  - `user_token` (optional)
- **Response**:
  ```json
  {
    "prod": [
      {
        "id": 1,
        "name": "Product 1",
        ...
      }
    ],
    "basket": [
      {
        "id": 1,
        "productID": 1,
        ...
      }
    ]
  }
  ```

#### Delete Basket Item

- **Endpoint**: `/deleteBasket`
- **Method**: POST
- **Description**: Removes a product from the basket.
- **Request Body**:
  ```json
  {
    "id": 1
  }
  ```
- **Response**:
  ```json
  {
    "message": "delete product"
  }
  ```

#### Increase Product Quantity

- **Endpoint**: `/productPlus`
- **Method**: POST
- **Description**: Increases the quantity of a product in the basket.
- **Request Body**:
  ```json
  {
    "id": 1
  }
  ```
- **Headers**: 
  - `api-key` (optional)
  - `user_token` (optional)
- **Response**:
  ```json
  {
    "id": 1,
    "count": 2,
    ...
  }
  ```

#### Decrease Product Quantity

- **Endpoint**: `/productMinus`
- **Method**: POST
- **Description**: Decreases the quantity of a product in the basket.
- **Request Body**:
  ```json
  {
    "id": 1
  }
  ```
- **Headers**: 
  - `api-key` (optional)
  - `user_token` (optional)
- **Response**:
  ```json
  {
    "id": 1,
    "count": 1,
    ...
  }
  ```

### Order Endpoints

#### Place an Order

- **Endpoint**: `/order`
- **Method**: POST
- **Description**: Creates an order for the items in the user's basket.
- **Request Body**:
  ```json
  {
    "totalPrice": 100,
    "orderData": {
      "adress": "123 Street",
      ...
    }
  }
  ```
- **Headers**: 
  - `api-key` (optional)
  - `user_token` (optional)
- **Response**:
  ```json
  {
    "invoiceId": "uuidv4-generated-key",
    ...
  }
  ```

#### Check Order Status

- **Endpoint**: `/checkOrder`
- **Method**: GET
- **Description**: Checks the status of pending orders.
- **Headers**: 
  - `api-key` (optional)
  - `user_token` (optional)
- **Response**:
  ```json
  {
    "status": "success",
    ...
  }
  ```

#### Get Orders by Invoice ID

- **Endpoint**: `/getOrders`
- **Method**: GET
- **Description**: Retrieves an order based on the provided invoice ID.
- **Headers**: 
  - `invoice-id` (required)
- **Response**:
  ```json
  {
    "id": 1,
    "inVoiceId": "uuidv4-generated-key",
    ...
  }
  ```

### User Endpoints

#### Get User by API Key

- **Endpoint**: `/getUser`
- **Method**: GET
- **Description**: Retrieves user details based on the provided API key.
- **Headers**: 
  - `api-key` (required)
- **Response**:
  ```json
  {
    "id": 1,
    "name": "John",
    ...
  }
  ```

#### Get Products from Basket

- **Endpoint**: `/getProductFromBasket`
-

 **Method**: GET
- **Description**: Retrieves products from the user's basket.
- **Headers**: 
  - `api-key` (optional)
  - `user_token` (optional)
- **Response**:
  ```json
  {
    "prod": [
      {
        "id": 1,
        "name": "Product 1",
        ...
      }
    ],
    "basket": [
      {
        "id": 1,
        "productID": 1,
        ...
      }
    ]
  }
  ```

## Error Handling

- **Validation Error**:
  ```json
  {
    "error": "Validation error message"
  }
  ```

- **Internal Error**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

## Conclusion

This API documentation provides a detailed guide for developers to interact with the ChâteRidée API. For any questions or support, please refer to the project's GitHub repository or contact the development team.
```

Добавленная информация о PostgreSQL включает основные настройки подключения и переменные окружения, которые нужно настроить в вашем проекте. Если нужны дополнительные детали по базе данных, например, структура таблиц, дайте знать, и я добавлю их в `README.md`.
