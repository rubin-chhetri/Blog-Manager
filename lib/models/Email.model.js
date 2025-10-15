// lib/models/Email.model.js
import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
});

// Prevent recompiling the model
const Email = mongoose.models.Email || mongoose.model("Email", emailSchema);

export default Email;
