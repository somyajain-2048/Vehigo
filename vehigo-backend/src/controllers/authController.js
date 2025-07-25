const authService = require("../services/authService");

exports.signup = async (req, res) => {
  try {
    const { user, token } = await authService.register(req.body);
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.login(email, password);
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

exports.logout = async (req, res) => {
  // With JWT, logout is handled client-side (by deleting token)
  res.status(200).json({ message: "Logged out successfully" });
};
