import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken";
import validator from "validator";
import doctorModel from "../models/doctorModel.js";
//API for add doctor
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
      availableDays
    } = req.body;
    const imageFile = req.file;

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    //check data
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address ||
      !imageFile
    ) {
      return res.json({ success: false, message: "missing details" });
    }

    //validate email
    if (validator.isEmail(email) === false) {
      return res.json({ success: false, message: "Invalid Email" });
    }

    //validate password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"});
    const imageUrl = imageUpload.secure_url

    const doctorData ={
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address:JSON.parse(address),
      availableDays: availableDays === "true" ? true : false,
      date:Date.now()
    }

    const newDoctor = new doctorModel(doctorData)
    await newDoctor.save()

    res.json({success:true, message:"Doctor Added"})

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message})

  }
};

//API for admin login
const loginAdmin = async(req, res)=>{
  try{

    const {email, password} = req.body
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

      const token = jwt.sign(email+password, process.env.JWT_SECRET)
      res.json({success:true, message:"Login Success", token})

    }
    else{
      res.json({success:false, message:"Invalid credentials"})
    }

  }
  catch(error){
    console.log(error)
    res.json({ success: false, message: error.message})
  }
}

export { addDoctor, loginAdmin };

