const alertService = require("../services/alert_service")

exports.getAllAlerts = async (req, res) => {
  try {
    const alerts = await alertService.getAllAlerts();
    res.json(alerts);
    console.log(alerts)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// create and alert
exports.createAlert = async (req, res) => {
  try {
    const newAlert = await alertService.createAlert(req.body);
    res.status(201).json(newAlert);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//update alerts
exports.updateAlert = async (req, res) => {
  try {
    const updateAlert = await alertService.updateAlert(req.params.id, req.body);
    res.status(200).json({ message: "Alert updated Succesfully", updateAlert })
  } catch (error) {
    res.status(500).json({ message: "An error occured", error })
  }
}

// get single alert
exports.getSingleAlert = async (req, res) => {
  try {
    const getAlert = await alertService.getSingleAlert(req.params.id);
    res.status(200).json(getAlert)
  } catch (error) {
    res.status(400).json({ message: "An error occured getting this Alert", error })
  }
}

// deleting an Alert
exports.deleteAlert = async (req, res) => {
  try {
    const deleteAlert = await alertService.deleteAlert(req.params.id);
    console.log(req.params.id)
    if (deleteAlert.deletedCount === 0) {
      res.status(404).json({ message: "No Alert found with this id" })
    } else {
      res.status(200).json({ massage: "Alert deleted succesfully" })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "An error occured", error });
  }
}

// deleting all alerts
exports.deleteAllAlerts = async (req, res) => {
  try {
    const deleteAlerts = await alertService.deleteAllAlerts();
    if (deleteAlerts.deletedCount === 0) {
      res.status(404).json({ message: "No Alert found" });
    } else {
      res.status(200).json({ massage: `Deleted ${deleteAlerts.deletedCount} alerts` })
    }
  } catch (error) {
    res.status(500).json({ message: "An error occured", error });
  }
}