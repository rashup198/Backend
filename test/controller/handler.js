const data = require("../model/data");

exports.createDetails = async(req, res) => {
    try {
        // extract name,email,phone from req.body
        const { name,email} = req.body;
        // create a new data object
        const response = await data.create({name,email})
        // send the response
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
