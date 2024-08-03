const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// تنظیم محل ذخیره فایل‌های آپلود شده
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'files/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

app.post('/files', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!');
});

app.listen(9000, () => {
  console.log('Server started on http://localhost:9000');
});
