

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.png');
  }
});

const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5, 
    },
  }).single('file');

const uploadController = (req, res) => {
    console.log(req.file)
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: err });
    } else if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    try {
        const filePath = req.file.path;
        res.json({ sucess:true, message: 'File uploaded successfully', filePath: filePath }); 
    } catch (error) {
        res.json({sucess:false, message: `File upload failed- ${error.message}`  }); 
    }

  });
};

module.exports = uploadController;

  