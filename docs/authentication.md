# Authentication

Most endpoints require a JWT access token.

## Header

```http
Authorization: Bearer <access_token>
```

Example

```http
Authorization: Bearer eyJhbGc...
```

The token can be obtained by calling:

```
POST /login
```
