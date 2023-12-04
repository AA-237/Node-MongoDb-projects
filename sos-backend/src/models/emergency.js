const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    //   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    //   contactId: { type: mongoose.Schema.Types.ObjectId, ref: 'EmergencyContact' },
    userId: {type: String},
    contactId: {type: String},
    alertTime: { type: Date },
    alertType: { type: String },
    location: {
        type: {
            type: String,
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        },
      country:  {type: String, required: true},
      town: {type: String}  
    }
});

// This will add a 2dsphere index to the 'location' field
alertSchema.index({ location: '2dsphere' });

// const Alert = mongoose.model('Alert', alertSchema);
module.exports = mongoose.model('Alerts', alertSchema)
