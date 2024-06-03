import memberModel from "../models/memberModel.js";

const membersController = {
  createMember: async (req, res) => {
    try {
      if (req.body.relationship === "") throw new Error("Empty relationship");
      if (req.body.fullName.firstName === "")
        throw new Error("Empty first name");
      if (req.body.fullName.lastName === "") throw new Error("Empty last name");
      if (req.body.baseDates.gender === "") throw new Error("Empty gender");
      if (req.body.baseDates.nationality === "")
        throw new Error("Empty nationality");
      if (req.body.livingCountry === "")
        throw new Error("Empty living country");
      if (req.body.civilStatus === "") throw new Error("Empty civil status");
      if (req.body.works === "") throw new Error("Empty works");

      const newMember = new memberModel(req.body);
      const creatingMember = await newMember.save();
      if (creatingMember._id) {
        res.json({
          state: "Successful",
          message: "Member created",
          id: creatingMember._id,
        });
      }
    } catch (error) {
      console.log("Error creating: ", error);
      res.json({ error: true, message: "Error creating member" });
    }
  },

  readAllMembers: async (req, res) => {
    try {
      const findingAllMembers = await memberModel.find();
      res.json({
        state: "Successful",
        message: "All members found",
        data: findingAllMembers,
      });
    } catch (error) {
      console.log("Error finding all: ", error);
      res.json({ error: true, message: "Error finding all members" });
    }
  },

  readMember: async (req, res) => {
    try {
      const findingMember = await memberModel.findById(req.params.id);
      if (findingMember.fullName.firstName) {
        res.json({
          state: "Successful",
          message: "Member found",
          data: findingMember,
        });
      }
    } catch (error) {
      console.log("Error finding: ", error);
      res.json({ error: true, message: "Error finding members" });
    }
  },

  updateMember: async (req, res) => {
    try {
      const updatingMember = await memberModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (updatingMember.fullName.firstName) {
        const updatedMember = await memberModel.findById(req.params.id);
        res.json({
          state: "Successful",
          message: "Member updated",
          data: [{ UpdatedData: updatedMember }, { OldData: updatingMember }],
        });
      }
    } catch (error) {
      console.log("Error updating: ", error);
      res.json({ error: true, message: "Error updating member" });
    }
  },

  deleteMember: async (req, res) => {
    try {
      const deletingMember = await memberModel.findByIdAndDelete(req.params.id);
      if (deletingMember.relationship) {
        res.json({
          state: "Successful",
          message: "Member deleted",
          data: null,
        });
      }
    } catch (error) {
      console.log("Error deleting: ", error);
      res.json({ error: true, message: "Error deleting member" });
    }
  },
};

export default membersController;
