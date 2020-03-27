Issue link: https://github.com/kogosoftwarellc/open-api/issues/647

Run server:

```
$ node server.js
```

See expected behavior:

```
$ curl localhost:3000/without-ref?flag=true
{ "flag": true } 
```

See buggy behavior:

```
$ curl localhost:3000/with-ref?flag=true
{ "flag": "true" } 
```
