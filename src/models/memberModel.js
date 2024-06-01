import { Schema, model } from "mongoose";

const memberSchema = new Schema({
  relationship: { type: String, required: true },
  fullName: [
    { firstName: { type: String, required: true } },
    { secondName: { type: String, required: true } },
    { lastname: { type: String, required: true } },
  ],
  nationalId: { type: Number, required: false },
  baseDates: [
    { gender: { type: String, required: true } },
    { age: { type: Number, required: false } },
    { birthday: { type: Date, required: false } },
    { nationality: { type: String, required: false } },
  ],
  livingCountry: { type: String, required: false },
  civilStatus: { type: String, required: false },
  works: { type: Boolean, required: false },
});

export default model("member", memberSchema);
