import {User} from"../Models/User.js";
export const userRegister=async (req, res) => {
  try {
    let user = await User.create(req.body);
    res.json({ message: "User Created", user: user, success: true });
    console.log(user);
  } catch (error) {
    res.json({ message: "User Not Created", error: error, success: false });
  }
}