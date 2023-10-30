const data = require("../model/data");

exports.createDetails = async(req, res) => {
    try {
        const { name,email,phone} = req.body;
        const response = await data.create({name,email,phone})
        res.status(201).json({
            status: "success",
            data:response,
            message: "Details created successfully."
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "fail",
            message: "An error occurred while creating the details."
        });
    }
};
