# Users API

---

## Register User

Create a new user account.

### Endpoint

```http
POST /register
```

### Authentication

No

### Request Body

```json
{
  "name": "Afif Rohul",
  "email": "afifrohul@gmail.com",
  "password": "password"
}
```

### Success Response (201)

```json
{
  "code": 201,
  "status": "success",
  "message": "User created",
  "data": {
    "user": {
      "id": "...",
      "name": "Afif Rohul",
      "email": "afifrohul@gmail.com",
      "avatar": "..."
    }
  }
}
```

---

## Login

Authenticate a user and return a JWT token.

### Endpoint

```http
POST /login
```

### Authentication

No

### Request Body

```json
{
  "email": "afifrohul@gmail.com",
  "password": "password"
}
```

### Success Response

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "token": "eyJhbGc..."
  }
}
```

---

## Get All Users

### Endpoint

```http
GET /users
```

### Authentication

Required

### Success Response

```json
{
  "code": 200,
  "status": "success",
  "message": "ok",
  "data": {
    "users": [
      {
        "id": "6bb4eab5-988d-4f4c-966b-b535f7acd0cd",
        "name": "Afif Rohul 2",
        "email": "afifrohul@gmail.com",
        "avatar": "https://ui-avatars.com/api/?name=Afif Rohul 2&background=random"
      }
    ]
  }
}
```

---

## Get Current User

### Endpoint

```http
GET /users/me
```

### Authentication

Required

```json
{
  "code": 200,
  "status": "success",
  "message": "ok",
  "data": {
    "user": {
      "id": "6bb4eab5-988d-4f4c-966b-b535f7acd0cd",
      "name": "Afif Rohul 2",
      "email": "afifrohul@gmail.com",
      "avatar": "https://ui-avatars.com/api/?name=Afif Rohul 2&background=random"
    }
  }
}
```
