# Threads API

---

## Create Thread

```http
POST /threads
```

### Authentication

Required

### Request Body

```json
{
  "title": "Thread ketiga",
  "body": "Ini adalah thread ketiga",
  "category": "General"
}
```

### Success Response

```json
{
  "code": 201,
  "status": "success",
  "message": "Thread created",
  "data": {
    "thread": {
      "id": "64c3e3e3-b447-4f4f-a363-61943f9e8e34",
      "title": "Thread ketiga",
      "body": "Ini adalah thread ketiga",
      "category": "General",
      "createdAt": "2026-07-01T02:24:16.521Z",
      "updatedAt": "2026-07-01T02:24:16.521Z",
      "ownerId": "6bb4eab5-988d-4f4c-966b-b535f7acd0cd",
      "upVotesBy": [],
      "downVotesBy": [],
      "totalComments": 0
    }
  }
}
```

---

## Get All Threads

```http
GET /threads
```

Returns all available threads.

### Success Response

```json
{
  "code": 200,
  "status": "success",
  "message": "ok",
  "data": {
    "threads": [
      {
        "id": "64c3e3e3-b447-4f4f-a363-61943f9e8e34",
        "title": "Thread ketiga",
        "body": "Ini adalah thread ketiga",
        "category": "General",
        "createdAt": "2026-07-01T02:24:16.521Z",
        "updatedAt": "2026-07-01T02:24:16.521Z",
        "ownerId": "6bb4eab5-988d-4f4c-966b-b535f7acd0cd",
        "upVotesBy": [],
        "downVotesBy": [],
        "totalComments": 0
      }
    ]
  }
}
```

---

## Get Thread Detail

```http
GET /threads/{threadId}
```

Returns detail information including comments.

### Success Response

```json
{
  "code": 200,
  "status": "success",
  "message": "ok",
  "data": {
    "detailThread": {
      "id": "64c3e3e3-b447-4f4f-a363-61943f9e8e34",
      "title": "Thread ketiga",
      "body": "Ini adalah thread ketiga",
      "category": "General",
      "userId": "6bb4eab5-988d-4f4c-966b-b535f7acd0cd",
      "createdAt": "2026-07-01T02:24:16.521Z",
      "updatedAt": "2026-07-01T02:24:16.521Z",
      "upVotesBy": [],
      "downVotesBy": [],
      "owner": {
        "id": "6bb4eab5-988d-4f4c-966b-b535f7acd0cd",
        "name": "Afif Rohul 2",
        "email": "afifrohul@gmail.com",
        "avatar": "https://ui-avatars.com/api/?name=Afif Rohul 2&background=random",
        "createdAt": "2026-07-01T02:22:15.959Z",
        "updatedAt": "2026-07-01T02:22:15.959Z"
      },
      "comments": []
    }
  }
}
```
