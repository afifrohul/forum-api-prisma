# Votes API

## Thread Votes

### Up Vote

```http
POST /threads/{threadId}/up-vote
```

### Authentication

Required

### Success Response

```json
{
  "code": 201,
  "status": "success",
  "message": "Thread upvoted",
  "data": {
    "vote": {
      "id": "67102183-9448-4b21-8231-187ae2c2b5ba",
      "voteType": 1,
      "userId": "6bb4eab5-988d-4f4c-966b-b535f7acd0cd",
      "threadId": "64c3e3e3-b447-4f4f-a363-61943f9e8e34",
      "createdAt": "2026-07-01T02:25:06.527Z",
      "updatedAt": "2026-07-01T02:25:06.527Z"
    }
  }
}
```

### Down Vote

```http
POST /threads/{threadId}/down-vote
```

### Authentication

Required

### Success Response

```json
{
  "code": 201,
  "status": "success",
  "message": "Thread downvoted",
  "data": {
    "vote": {
      "id": "67102183-9448-4b21-8231-187ae2c2b5ba",
      "voteType": -1,
      "userId": "6bb4eab5-988d-4f4c-966b-b535f7acd0cd",
      "threadId": "64c3e3e3-b447-4f4f-a363-61943f9e8e34",
      "createdAt": "2026-07-01T02:25:06.527Z",
      "updatedAt": "2026-07-01T02:25:17.950Z"
    }
  }
}
```

### Neutral Vote

```http
POST /threads/{threadId}/neutral-vote
```

### Authentication

Required

### Success Response

```json
{
  "code": 201,
  "status": "success",
  "message": "Thread vote neutralized",
  "data": {
    "vote": {
      "id": "67102183-9448-4b21-8231-187ae2c2b5ba",
      "voteType": 0,
      "userId": "6bb4eab5-988d-4f4c-966b-b535f7acd0cd",
      "threadId": "64c3e3e3-b447-4f4f-a363-61943f9e8e34",
      "createdAt": "2026-07-01T02:25:06.527Z",
      "updatedAt": "2026-07-01T02:25:29.540Z"
    }
  }
}
```

---

## Comment Votes

### Up Vote

```http
POST /threads/{threadId}/comments/{commentId}/up-vote
```

### Authentication

Required

### Success Response

```json
{
  "code": 201,
  "status": "success",
  "message": "Comment upvoted",
  "data": {
    "vote": {
      "id": "156656b6-ce95-496a-8a3c-4ff4b59f5389",
      "voteType": 1,
      "userId": "6bb4eab5-988d-4f4c-966b-b535f7acd0cd",
      "commentId": "2bb0fbf7-6175-4573-9cef-ff19b217c195",
      "createdAt": "2026-07-01T02:25:39.678Z",
      "updatedAt": "2026-07-01T02:25:39.678Z"
    }
  }
}
```

### Down Vote

```http
POST /threads/{threadId}/comments/{commentId}/down-vote
```

### Authentication

Required

### Success Response

```json
{
  "code": 201,
  "status": "success",
  "message": "Comment downvoted",
  "data": {
    "vote": {
      "id": "156656b6-ce95-496a-8a3c-4ff4b59f5389",
      "voteType": -1,
      "userId": "6bb4eab5-988d-4f4c-966b-b535f7acd0cd",
      "commentId": "2bb0fbf7-6175-4573-9cef-ff19b217c195",
      "createdAt": "2026-07-01T02:25:39.678Z",
      "updatedAt": "2026-07-01T02:25:50.049Z"
    }
  }
}
```

### Neutral Vote

```http
POST /threads/{threadId}/comments/{commentId}/neutral-vote
```

### Authentication

Required

### Success Response

```json
{
  "code": 201,
  "status": "success",
  "message": "Comment vote neutralized",
  "data": {
    "vote": {
      "id": "156656b6-ce95-496a-8a3c-4ff4b59f5389",
      "voteType": 0,
      "userId": "6bb4eab5-988d-4f4c-966b-b535f7acd0cd",
      "commentId": "2bb0fbf7-6175-4573-9cef-ff19b217c195",
      "createdAt": "2026-07-01T02:25:39.678Z",
      "updatedAt": "2026-07-01T02:25:59.478Z"
    }
  }
}
```
