const express = require('express');
const router = express.Router();
const Routine = require('../models/routine');

// Create a new routine
router.post('/routines', async (req, res) => {
  const { routineName, routineDescription, exercises } = req.body;

  try {
    const newRoutine = new Routine({
      routineName,
      routineDescription,
      exercises,
    });

    const savedRoutine = await newRoutine.save();
    res.status(201).json(savedRoutine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all routines
router.get('/routines', async (req, res) => {
  try {
    const routines = await Routine.find();
    res.json(routines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single routine by ID
router.get('/routines/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const routine = await Routine.findById(id);
    if (!routine) {
      return res.status(404).json({ message: 'Routine not found' });
    }
    res.json(routine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a routine by ID
router.put('/routines/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const updatedRoutine = await Routine.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedRoutine) {
      return res.status(404).json({ message: 'Routine not found' });
    }
    res.json(updatedRoutine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a routine by ID
router.delete('/routines/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRoutine = await Routine.findByIdAndDelete(id);
    if (!deletedRoutine) {
      return res.status(404).json({ message: 'Routine not found' });
    }
    res.json({ message: 'Routine deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
