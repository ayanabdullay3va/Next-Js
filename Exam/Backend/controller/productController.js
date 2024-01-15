const product = require("./../model/productModel");

const getPostUser = async (req, res) => {
  let findUser = await product.findOne({ id: req.body.id });
  if (findUser) {
    res.send("bu idli element varr");
  } else {
    const NewUser = new product(req.body);
    NewUser.save();
  }
};
const getUser = async (req, res) => {
  let allUser = await product.find({});
  res.send(allUser);
};
const getDeleteUser = async (req, res) => {
  let id = req.params.id;
  let findUser = await product.findOne({ id: id });
  let _id = findUser._id;
  let deleteUser = await product.findByIdAndDelete(_id);
};
const getByIdUser = async (req, res) => {
  let id = req.params.id;
  let findUser = await product.findOne({ id: id });
  res.send(findUser);
};
const getUpdateUser = async (req, res) => {
  let id = req.params.id;
  let UpdateUser = await product.findOneAndUpdate({ id: id }, req.body);
};
const getPutUser = async (req, res) => {
  let id = req.params.id;
  let UpdateUser = await product.replaceOne({ id: id }, req.body);
};
module.exports = {
  getUser,
  getPostUser,
  getDeleteUser,
  getByIdUser,
  getUpdateUser,
  getPutUser,
};
