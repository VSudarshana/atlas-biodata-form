const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  dob: String,
  gender: String,
  religion: String,
  interviewDate: String,
  qualification: String,
  nominee: String,
  maritalStatus: String,
  bloodGroup: String,
  phone: String,
  email: String,
  emergencyNumber: String,
  nomineeRelation: String,
  languages: String,
  experience: String,
  prevPosition: String,
  company: String,
  lastSalary: String,
  appliedPosition: String,
  expectedSalary: String,
  familyDetails: String,
  reference: String,
  reasonChange: String,
  remarks: String,
  joiningDate: String,
  address: String,
});

module.exports = mongoose.model("User", userSchema);