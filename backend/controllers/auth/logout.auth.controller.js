const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout controller: " + error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default logout;
