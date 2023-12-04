const mongoose = require("mongoose");
const Alerts = require("../models/emergency");

const getAllAlerts = async () => {
  return await Alerts.find();
};

const createAlert = async (alertData) => {
  const alert = new Alerts({
    userId: alertData.userId,
    contactId: alertData.contactId,
    alertTime: new Date(),
    alertType: alertData.alertType,
    location: alertData.location
  });
  return await alert.save();
};

const updateAlert = async (id, updateData) => {
  return await Alerts.updateOne(
    { _id: id },
    { $set: updateData }
  );
};

const getSingleAlert = async (id) => {
  return await Alerts.findById(id);
};

const deleteAlert = async (id) => {
  return await Alerts.findByIdAndDelete({_id: new mongoose.Types.ObjectId(id)});
};

const deleteAllAlerts = async () => {
  return await Alerts.deleteMany({});
};

module.exports = {
  getAllAlerts,
  createAlert,
  updateAlert,
  getSingleAlert,
  deleteAlert,
  deleteAllAlerts
};