import multer from "multer";

// Storage (local uploads folder)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

// Allowed file types
const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png/;
  const ext = file.mimetype.split("/")[1];

  if (allowed.test(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .jpeg, .png images allowed!"), false);
  }
};

export const upload = multer({ storage, fileFilter });
