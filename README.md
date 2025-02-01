# nodejs-vexere



# libraries
yarn init
yarn add sequelize mysql2   
yarn add sequelize-cli --dev
yarn add nodemon --dev
yarn add bcryptjs
yarn add jsonwebtoken
yarn add multer (Thao tác với file)

yarn sequelize init

# Tạo nhanh database từ config có sẵn
> Hệ thống sẽ dựa theo thông tin DB từ file config.json để khởi tạo DB tương ứng
yarn sequelize db:create 


## Tạo model
yarn sequelize model:generate --name Station --attributes name:string,address:string,province:string
yarn sequelize model:generate --name User --attributes name:string email:string,password:string,numberPhone:string,type:string

## Tạo bảng tương ứng với model
yarn sequelize db:migrate để tạo các bảng tương ứng với model

## Tạo seeder
yarn sequelize seed:generate --name create-station-fake
yarn sequelize db:seed:all
yarn sequelize db:seed:undo:all