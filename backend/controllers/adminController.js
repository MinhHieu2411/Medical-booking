import validator from "validator";
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
    } = req.body;
    const imageFile = req.file;

    //check daa
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
      return res.json({ success: false, message: "Missing Details" });
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
  } catch (error) {}
};

export { addDoctor };
