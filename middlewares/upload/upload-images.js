const { mkdirp } = require("mkdirp");
const multer = require("multer");

const uploadImage = (type) => {
    const path = `./public/images/${type}`;
    const mkdir = mkdirp.sync(path);
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            // Hệ thống sẽ đứng từ file server.js để truy xuất tới folder /public. 
            // Do file router được import & sử dụng trong file server.js
            cb(null, path); // Setup chỗ cần lưu file. 
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '_' + file.originalname); // Đặt lại tên cho file
        }
    })
    
    const upload = multer({
        storage: storage, fileFilter: (req, file, cb) => {
            const imageExts = ['jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'apng', 'png', 'gif', 'tiff', 'tif', 'psd', 'avif', 'svg', 'webp', 'ico', 'cur'];
            const ext = file.originalname.split('.').pop();
    
            if (imageExts.includes(ext)) {
                cb(null, true);
            }
            else {
                cb(new Error("Invalid file extension."));
            }
        }
    });

    return upload.single(type);
}

module.exports = {
    uploadImage
}