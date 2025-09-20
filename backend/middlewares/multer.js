import multer from "multer";
const storage = multer.diskStorage({
  // destination: function (req, file, callback) {
  //   callback(null, "uploads/"); // Save to 'uploads' folder (create it if needed)
  // },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
