const express = require("express");
const app = express();

const StudentSchema = require("../model/student");
exports.createStudent = (req,res)=> {
    const Student = new StudentSchema(req.body);
    Student.save((err,data)=> {
        if(err){
            res.status(500).json({
                message: "Error in saving Student",
            });
        }else {
            res.status(201).json({
                obj: data,
                message: "Student data saved successfully",
            });
        }
    });
};

exports.getAllStudent = (req,res)=>{
    StudentSchema.find((err,data)=>{
        if(err){
            res.status(500).json({
                message: "Error in fetching data"
            })
        }else
        {
            res.status(200).json({
                data: data,
                message: "Student data fetch successfully"
            })
        }
    })
}