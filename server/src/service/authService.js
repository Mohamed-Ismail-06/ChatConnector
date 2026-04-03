import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const createUserService = async (userData) => {
  try {
    const { name, email, password, confirmPassword } = userData;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { status: 400, message: "Email is already registered" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      userName: name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return {
      status: 201,
      message: "User created successfully",
      userId: savedUser._id,
    };
  } catch (err) {
    return { status: 500, message: err.message };
  }
};

