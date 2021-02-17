import db from "../Config/db.config";
import Users from "../Models/users";

db.sync();

const AllUsers = async (req, res) => {
  const users = await Users.findAll({});

  res.json(users);
};

export { AllUsers };
