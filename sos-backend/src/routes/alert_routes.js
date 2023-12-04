const express = require("express");
const router = express.Router();

const alertController = require("../controllers/alert_controller")

// getting all alerts
router.get('/', alertController.getAllAlerts);
router.post('/create', alertController.createAlert);
router.put('/update/:id', alertController.updateAlert);
router.get('/:id', alertController.getSingleAlert);
router.delete('/delete/:id', alertController.deleteAlert);
router.delete('/delete', alertController.deleteAllAlerts);

module.exports = router