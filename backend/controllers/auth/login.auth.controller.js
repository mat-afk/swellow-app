import bcrypt from "bcryptjs";

import User from "../../models/user.model.js";
import generateTokenAndSetCookie from "../../utils/generateToken.js";

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Incorrect username or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePicture: user.profilePicture,
    });

  } catch (error) {
    console.error("Error in login controller: " + error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default login;
