const { cloudinaryConnect } = require('../config/cloudinary');
const File = require('../models/files');
const cloudinary = require('cloudinary').v2;

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

// function which checks if the file type is supported
function isFileTypeSupported(fileType, supportedTypes) {
    return supportedTypes.includes(fileType);
}


// function which uploads the file to cloudinary
async function uploadFileToCloudinary(file,folder){
    const options= {folder}
    console.log("temp file path",file.tempFilePath);
    return await cloudinary.uploader.upload(file,tempFilePath,options)
}

// image upload to cloudinary
exports.imageUpload= async(req,res)=>{
    try {
        //data fetch
        const{name,tags,email}=req.body;
        const file=req.files.imageFile;
        console.log(file);

        // validation for image
        const supportedTypes = ['png', 'jpg', 'jpeg'];
        const fileType = file.name.split('.')[1];
        if(!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                msg: 'File type not supported'
            });
        }

        //upload image to cloudinary
        console.log("uploading file to cloudinary");
        const response= await uploadFileToCloudinary(file,"rashu");
        console.log(response);

        // save entry to db
        const fileData= await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        });
        
        res.json({
            success:true,
            msg:"Image uploaded successfully",
            data:fileData
        })
        
    } catch (error) {
        console.log(error);
    }
}