# nodejs-vexere



# command line
yarn init
yarn add sequelize mysql2   
yarn add sequelize-cli --dev
yarn add nodemon --dev

yarn sequelize init



# Tạo nhanh database từ config có sẵn
> Hệ thống sẽ dựa theo thông tin DB từ file config.json để khởi tạo DB tương ứng
yarn sequelize db:create 


## Tạo model
yarn sequelize model:generate --name Station --attributes name:string,address:string,province:string

## Tạo seeder
yarn sequelize seed:generate --name create-station-fake
yarn sequelize db:seed:all
yarn sequelize db:seed:undo:all