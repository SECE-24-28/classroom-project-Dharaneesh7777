const Student = require('../models/Student');
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}