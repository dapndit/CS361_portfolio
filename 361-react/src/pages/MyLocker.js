import React, { useState, useEffect } from "react";
import Collapsible from 'react-collapsible';
import { BsChevronDown } from "react-icons/bs";

function MyLocker() {
  const [routines, setRoutines] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [editExercise, setEditExercise] = useState({});

  useEffect(() => {
    fetchRoutines();
  }, []);

  const fetchRoutines = async () => {
    try {
      const response = await fetch('http://localhost:3005/api/proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: 'http://localhost:4000/api/routines',
          method: 'GET',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setRoutines(data);
      } else {
        throw new Error('Failed to fetch routines');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleEdit = (routineId, exerciseId) => {
    const routine = routines.find((r) => r._id === routineId);
    const exercise = routine.exercises.find((e) => e._id === exerciseId);
    setSelectedRoutine(routine);
    setSelectedExercise(exercise);
    setEditExercise({ ...exercise });
  };

  const handleEditExerciseChange = (key, value) => {
    setEditExercise((prevExercise) => ({ ...prevExercise, [key]: value }));
  };

  const handleSaveEdit = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/routines/${selectedRoutine._id}/exercises/${selectedExercise._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editExercise),
      });

      if (response.ok) {
        fetchRoutines(); // Reload routines after update
        setSelectedRoutine(null);
        setSelectedExercise(null);
        setEditExercise({});
      } else {
        throw new Error('Failed to update exercise');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleDelete = async (routineId, exerciseId) => {
    try {
      // Ask for confirmation before deleting
      if (!window.confirm('Are you sure you want to delete this exercise?')) {
        return; // If the user cancels, do not proceed with deletion
      }

      const response = await fetch(`http://localhost:4000/api/routines/${routineId}/exercises/${exerciseId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchRoutines(); // Reload routines after deletion
      } else {
        throw new Error('Failed to delete exercise');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
	<div>
	  <br />
	  {Array.isArray(routines) && routines.length > 0 ? (
		routines.map((routine, index) => (
		  <React.Fragment key={routine._id}>
			<Collapsible key={routine._id} trigger={`${routine.routineName}`} transitionTime={100}>
			  <p>{routine.routineDescription}</p>
			  <table>
				<thead>
				  <tr>
					<th>Exercise Name</th>
					<th>Sets</th>
					<th>Reps</th>
					<th>Actions</th>
				  </tr>
				</thead>
				<tbody>
				  {routine.exercises.map((exercise) => (
					<tr key={exercise._id}>
					  <td>{exercise.exerciseName}</td>
					  <td>{exercise.sets}</td>
					  <td>{exercise.reps}</td>
					  <td>
						<button onClick={() => window.confirm('Are you sure you want to edit this exercise?') && handleEdit(routine._id, exercise._id)}>Edit</button>
						<button onClick={() => handleDelete(routine._id, exercise._id)}>Delete</button>
					  </td>
					</tr>
				  ))}
				</tbody>
			  </table>
			</Collapsible>
			{/* Add a line break if it's not the last Collapsible */}
			{index !== routines.length - 1 && <br />}
		  </React.Fragment>
		))
	  ) : (
		<p>No routines available</p>
	  )}
  
	  {selectedRoutine && selectedExercise && (
		<div>
          <h3>Edit Exercise</h3>
          <label>
            Exercise Name:
            <input
              type="text"
              value={editExercise.exerciseName || ''}
              onChange={(e) => handleEditExerciseChange('exerciseName', e.target.value)}
            />
          </label>
          <label>
            Sets:
            <input
              type="number"
              value={editExercise.sets || ''}
              onChange={(e) => handleEditExerciseChange('sets', parseInt(e.target.value))}
            />
          </label>
          <label>
            Reps:
            <input
              type="number"
              value={editExercise.reps || ''}
              onChange={(e) => handleEditExerciseChange('reps', parseInt(e.target.value))}
            />
          </label>
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      )}
    </div>
  );
}

export default MyLocker;
