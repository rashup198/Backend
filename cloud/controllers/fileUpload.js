const File = require('../models/files');

//local file upload

exports.localFileUpload = async (req, res) => {
    try {
        const file = req.files.file;
        //create a path for file on server
        let path = __dirname+"/files/"+Date.now() + `.${file.name.split('.')[1]}`;

        //move file to server
        file.mv(path,(err)=>{
            console.log(err);
        })
        res.json({
            success:true,
            msg:"File uploaded successfully"
        })
    } catch (error) {
        console.log(error);
    }
}