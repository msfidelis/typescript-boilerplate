

## Auth Example

```bash
curl -XPOST \
-H "Content-type: application/json" \
-d '{
	"email" : "tchupis@loko.com",
	"password" : "123"
}' http://localhost:3000/api/token
```

### Output

```bash
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 111
ETag: W/"6f-M/N8yibxScoTy8/9j4wwHnZf0/Q"
Date: Sun, 10 Sep 2017 23:09:48 GMT
Connection: keep-alive

{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.8M2TFDqurp50x1_-78txB5IBboJeNsiYvNAWCUlS3fM"
}⏎
```