const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  customerId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  bookId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  initialDate: {
    type: Date,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
});

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
