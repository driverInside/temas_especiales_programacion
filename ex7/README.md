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
docker network create --driver bridge pgnetwork

docker network connect pgnetwork pgadmin
docker network connect pgnetwork postgres
```

You can run `docker network inspect pgnetwork` to inspect your network

Finally go to [http://localhost:5050/browser/](http://localhost:5050/browser/) and connect your postgres database.

```
 {
        "Name": "pgnetwork",
        ...
        "Containers": {
            "3111...": {
                "Name": "pgadmin",
                ...
                "MacAddress": "02:42:ac:12:00:03",
                "IPv4Address": "172.18.0.3/16",
                "IPv6Address": ""
            },
            "5e5...": {
                "Name": "postgres",
                ...
                "MacAddress": "02:42:ac:12:00:02",
                "IPv4Address": "172.18.0.2/16",
                "IPv6Address": ""
            }
        },
```

For this example, postgres server is running on the `172.18.0.2` IP address.

Connect your database 

General tab
Name: postgres
Connection tab
Hostname: 172.18.0.2 (see command above)
Port: 5432
Username: postgres
Password: password


Install dependencies

```bash
npm i express sequelize pg pg-hstore
```
## Create tables

Crate a new database and go to the `Tools` -> `Query Tool` menu (pgAdmin) and run the commands below:

```sql
CREATE TABLE IF NOT EXISTS "editorials" (
	id SERIAL PRIMARY KEY,
	name VARCHAR(250) NOT NULL,
	"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  	"updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL
);

CREATE TABLE IF NOT EXISTS "books" (
	id SERIAL PRIMARY KEY,
	title varchar(250) NOT NULL,
	"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  	"updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
	"editorial_id" INTEGER REFERENCES "editorials" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "authors" (
	"id" serial PRIMARY KEY,
	"name" VARCHAR(250) NOT NULL,
	"lastname" VARCHAR(250),
	"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  	"updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL
);

CREATE TABLE IF NOT EXISTS "booksauthors" (
	"book_id" INTEGER NOT NULL REFERENCES "books" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
	"author_id" INTEGER NOT NULL REFERENCES "authors" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
	"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  	"updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
	PRIMARY KEY ("book_id", "author_id")
);
```
