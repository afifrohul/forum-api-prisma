# Leaderboards API

## Get Leaderboards

```http
GET /leaderboards
```

### Authentication

No

Return ranking of all users based on their score.

### Success Response

```json
{
  "code": 200,
  "status": "success",
  "message": "ok",
  "data": {
    "leaderboards": [
      {
        "id": "6e8a8c32-bbcf-45af-927e-f7850ae729a1",
        "score": 3,
        "userId": "492df421-d9d9-415b-a66a-dc5a4005fd3d",
        "user": {
          "id": "492df421-d9d9-415b-a66a-dc5a4005fd3d",
          "name": "Afif Rohul",
          "email": "afifmemyself22@gmail.com",
          "avatar": "https://ui-avatars.com/api/?name=Afif%20Rohul&background=random",
          "createdAt": "2026-06-29T06:37:01.188Z",
          "updatedAt": "2026-06-29T06:37:01.188Z"
        }
      },
      {
        "id": "7806f4a0-3a52-4b76-86cb-9e8fc319b8ad",
        "score": 2,
        "userId": "1aaa76e9-84f5-4936-9ebd-e2b43fd5d51b",
        "user": {
          "id": "1aaa76e9-84f5-4936-9ebd-e2b43fd5d51b",
          "name": "John Doe",
          "email": "johndoe@gmail.com",
          "avatar": "https://ui-avatars.com/api/?name=John Doe&background=random",
          "createdAt": "2026-06-30T03:51:28.920Z",
          "updatedAt": "2026-06-30T03:51:28.920Z"
        }
      },
      {
        "id": "763b1ef7-2f06-4139-b58b-b2befb038c9b",
        "score": 0,
        "userId": "8a4a8802-ea6c-458a-82f1-71aafd8f653e",
        "user": {
          "id": "8a4a8802-ea6c-458a-82f1-71aafd8f653e",
          "name": "Yolanda Indah",
          "email": "Zelda27@yahoo.co.id",
          "avatar": "https://ui-avatars.com/api/?name=Yolanda%20Indah&background=random",
          "createdAt": "2026-06-29T06:37:01.200Z",
          "updatedAt": "2026-06-29T06:37:01.200Z"
        }
      }
    ]
  }
}
```
