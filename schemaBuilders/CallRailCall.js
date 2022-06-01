module.exports = function (mongoose) {
    const tagSchema = new mongoose.Schema({ name: { type: String } });

    return new mongoose.Schema({
        answered: { type: Boolean },
        business_phone_number: { type: String },
        customer_city: { type: String },
        customer_country: { type: String },
        customer_name: { type: String },
        customer_phone_number: { type: String },
        customer_state: { type: String },
        direction: { type: String },
        duration: { type: String },
        id: { type: String },
        recording: { type: String },
        recording_duration: { type: Number },
        recording_player: { type: String },
        start_time: { type: String },
        tracking_phone_number: { type: String },
        voicemail: { type: Boolean },
        source: { type: String },
        tracker_id: { type: String },
        tags: { type: [tagSchema] },
    });
};
