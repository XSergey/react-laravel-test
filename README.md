##Installation

### Install Front-End Requirements
```sh
cd app-frontend
npm install
```

### Run Back-End (port 8000)

You need set connection in .env file

```
composer update
php artisan migrate 
php artisan serve
```


### Run Front-End (Port 8080)

```
cd app-backend
npm start
```