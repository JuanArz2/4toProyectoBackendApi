import { Schema, model } from "mongoose";

const memberSchema = new Schema({
  relationship: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    secondName: { type: String, required: false },
    lastname: { type: String, required: true },
  },
  nationalId: { type: Number, required: false },
  baseDates: {
    gender: { type: String, required: true },
    age: { type: Number, required: false },
    birthday: { type: Date, required: false },
    nationality: { type: String, required: true },
  },
  livingCountry: { type: String, required: true },
  civilStatus: { type: String, required: true },
  works: { type: Boolean, required: true },
});

export default model("member", memberSchema);
