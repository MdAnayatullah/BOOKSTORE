import User from "../model/user_model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, newpassword, confirmpassword } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(newpassword, 10);
    const hashPassword1 = await bcryptjs.hash(confirmpassword, 10);

    const createdUser = new User({
      fullname: fullname,
      email: email,
      newpassword: hashPassword,
      confirmpassword: hashPassword1,
    });

    await createdUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, confirmpassword } = req.body;
    const user = await User.findOne({ email });
    const isMatch = bcryptjs.compare(confirmpassword, user.confirmpassword);

    if(!user || !isMatch){
      return res.status(400).json({message:{"Invalid username or password"}})

    }else{
      res.status(200).json({message:{"Login successfully",user:{
        _id:user._id,
        fullname: user.fullname,
        email: user.email,
      }}})
    }
  } catch (error) {
    console.log("Error: "+error.message)
    res.status(500).json({message:"Internal server error"})
  }
};
