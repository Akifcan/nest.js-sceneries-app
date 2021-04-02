import { diskStorage } from 'multer'

export const storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads');
    },
    filename: (req, file, cb) => {
         const allowedTypes : String[] = ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif"]
        if(allowedTypes.includes(file.mimetype)){
            cb(null, Date.now() + '-' + file.originalname);
        }else{
            cb(new Error("Lütfen resim dosyası yükleyin"), null);
        }
    },
});

