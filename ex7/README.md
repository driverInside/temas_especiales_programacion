# EX7

## Getting started

Download Postgres Docker image

```
 docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres
```

Download pgAdmin

[pgAdmin](https://www.pgadmin.org/download/)

Or use the docker image

```
docker run --name pgadmin -p 5050:80 -e "PGADMIN_DEFAULT_EMAIL=name@example.com" -e "PGADMIN_DEFAULT_PASSWORD=password" -d dpage/pgadmin4
```

Then, create a new network and link pgadmin and postgres

```
docker network connect pgnetwork pgadmin
docker network connect pgnetwork postgres
```

You can run `docker network inspect pgnetwork` to inspect your network

Finally go to [http://localhost:5050/browser/](http://localhost:5050/browser/) and connect your postgres database.

