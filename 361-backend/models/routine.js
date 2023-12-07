const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  exerciseName: String,
  sets: Number,
  reps: Number,
});

const routineSchema = new mongoose.Schema({
  routineName: String,
  routineDescription: String,
  exercises: [exerciseSchema],
});

const Routine = mongoose.model('Routine', routineSchema);

module.exports = Routine;
