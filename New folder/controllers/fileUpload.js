const File = require("../model/files");

exports.localfileUpload = async(req, res)=>{
    try {
        // extract the file from the request
        const file = req.files.file;
        // create the path for the file on the server
        let path = __dirname+"/files/"+Date.now()+`.${file.name.split(".")[1]}`;

        //move the file to server
        file.mv(path, (err)=>{
            console.log(err);
        })
        res.status(200).json({
            success:true,
            message:"File uploaded successfully"
        })
    } catch (error) {
        console.log(error);
    }
}