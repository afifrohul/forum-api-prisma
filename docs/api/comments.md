# Comments API

---

## Create Comment

```http
POST /threads/{threadId}/comments
```

### Authentication

Required

### Request Body

```json
{
  "content": "Ini adalah komen pertama"
}
```

### Success Response (201)

```json
{
  "code": 201,
  "status": "success",
  "message": "Comment created",
  "data": {
    "comment": {
      "id": "2bb0fbf7-6175-4573-9cef-ff19b217c195",
      "content": "Ini adalah komen pertama",
      "userId": "6bb4eab5-988d-4f4c-966b-b535f7acd0cd",
      "threadId": "64c3e3e3-b447-4f4f-a363-61943f9e8e34",
      "createdAt": "2026-07-01T02:24:55.040Z",
      "updatedAt": "2026-07-01T02:24:55.040Z",
      "upVotesBy": [],
      "downVotesBy": [],
      "owner": {
        "id": "6bb4eab5-988d-4f4c-966b-b535f7acd0cd",
        "name": "Afif Rohul 2",
        "email": "afifrohul@gmail.com",
        "avatar": "https://ui-avatars.com/api/?name=Afif Rohul 2&background=random",
        "createdAt": "2026-07-01T02:22:15.959Z",
        "updatedAt": "2026-07-01T02:22:15.959Z"
      }
    }
  }
}
```
