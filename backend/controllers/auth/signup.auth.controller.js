import bcrypt from "bcryptjs";

import User from "../../models/user.model.js";

const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmedPassword, gender } =
      req.body;

    if (password !== confirmedPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let profilePicture = null;

    if (gender === "male") {
      profilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    }

    if (gender === "female") {
      profilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    }

    if (gender === "non-binary") {
      profilePicture = `https://avatar.iran.liara.run/public?username=${username}`;
    }

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePicture,
    });

    if (!newUser) {
      res.status(400).json({ error: "Invalid user data" });
    }

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePicture: newUser.profilePicture,
    });
  } catch (error) {
    console.log("Error in signup controller: " + error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default signup;