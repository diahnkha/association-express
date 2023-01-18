http://localhost:8080/api/auth/signup

{
    "username": "mcd",
    "email": "mcd@gmail.com",
    "password": "1234",
    "roles": ["user", "moderator"]
}

http://localhost:8080/api/auth/signin

{
    "username" : "mcd",
    "password" : "1234"
}

x-access-token on headers

contoh:
x-access-token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc0MDMwODQ5LCJleHAiOjE2NzQxMTcyNDl9.oZkCJq_SmNkddUASkODCoQTvsvzE369Tk5WdTvlqfLU