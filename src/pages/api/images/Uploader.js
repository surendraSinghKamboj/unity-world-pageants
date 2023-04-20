import formidable from "formidable";
import path from "path";
import fs from "fs";

const uploadDir = path.join(process.cwd(), "public", "uploads");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {

  const form = formidable.IncomingForm();
  // { : true, uploadDir }
  form.multiples = true;
  form.uploadDir = uploadDir

  try {
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      const images = Object.values(files).map((file) => {
        if (!file.path) {
          return null;
        }

        const extension = file.name.split(".").pop();
        const newFilename = `${Date.now()}-${Math.floor(Math.random() * 100000)}.${extension[0]}`;
        fs.renameSync(file.path, path.join(uploadDir, newFilename + extension));
        console.log(newFilename + extension)
        return `/uploads/${newFilename}`;
      }).filter((path) => path !== null);

      res.status(200).json({ images });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
