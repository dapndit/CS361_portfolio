import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateRoutines = () => {
  const navigate = useNavigate();
  const [routineName, setRoutineName] = useState('');
  const [routineDescription, setRoutineDescription] = useState('');
  const [exercises, setExercises] = useState([
    { exerciseName: '', sets: '', reps: '' },
    { exerciseName: '', sets: '', reps: '' },
    { exerciseName: '', sets: '', reps: '' },
    { exerciseName: '', sets: '', reps: '' },
    { exerciseName: '', sets: '', reps: '' },
    { exerciseName: '', sets: '', reps: '' },
  ]);
  const [error, setError] = useState(null); // State to hold error message

  const handleRoutineNameChange = (event) => {
    setRoutineName(event.target.value);
  };

  const handleRoutineDescriptionChange = (event) => {
    setRoutineDescription(event.target.value);
  };

  const handleExerciseChange = (index, key, value) => {
    const newExercises = [...exercises];
    newExercises[index][key] = value;
    setExercises(newExercises);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const proxyRequest = {
        url: '/api/routines', // Target the backend URL relative to the proxy
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { routineName, routineDescription, exercises },
      };
  
      const response = await fetch('http://localhost:3005/api/proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(proxyRequest),
      });
  
      if (response.ok) {
        // Reset form fields if successful
        setRoutineName('');
        setRoutineDescription('');
        setExercises([
          { exerciseName: '', sets: '', reps: '' },
          { exerciseName: '', sets: '', reps: '' },
          { exerciseName: '', sets: '', reps: '' },
          { exerciseName: '', sets: '', reps: '' },
          { exerciseName: '', sets: '', reps: '' },
          { exerciseName: '', sets: '', reps: '' },
        ]);
        // Navigate to the home page after successful submission
        navigate('/');
      } else {
        throw new Error('Failed to create routine');
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Set error message state for displaying to the user
      setError('Failed to save routine. Please try again.');
    }
  };
  
  

  return (
    <div>
      <h2>Create Routine</h2>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="routineName">Routine Name:</label>
          <input
            type="text"
            id="routineName"
            value={routineName}
            onChange={handleRoutineNameChange}
          />
        </div>
        <div>
          <label htmlFor="routineDescription">Routine Description:</label>
          <textarea
            id="routineDescription"
            value={routineDescription}
            onChange={handleRoutineDescriptionChange}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Exercise Name</th>
              <th>Number of Sets</th>
              <th>Number of Reps</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((exercise, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={exercise.exerciseName}
                    onChange={(e) => handleExerciseChange(index, 'exerciseName', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={exercise.sets}
                    onChange={(e) => handleExerciseChange(index, 'sets', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={exercise.reps}
                    onChange={(e) => handleExerciseChange(index, 'reps', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateRoutines;
