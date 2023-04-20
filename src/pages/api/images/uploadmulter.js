import nc from "next-connect";
import multer from "multer";
import path from "path";

const upload = multer({
    storage: multer.diskStorage({
        destination: "./public/uploads",
        filename: (req, file, cb) => {
            cb(
                null,
                `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
            );
        },
    }),
});

const apiRouteHandler = nc().post(async (req, res, next) => {
    try {
        upload.single("image")(req, res, next);
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const imagePath = req.file.path;
        res.status(200).json({ message: "Image uploaded successfully", imagePath });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

export default apiRouteHandler;
