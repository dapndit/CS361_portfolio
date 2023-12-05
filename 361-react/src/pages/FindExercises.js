import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FindExercises() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [exerciseData, setExerciseData] = useState([]);

  const handleSearch = async () => {
    if (!selectedCategory) {
      alert('Please select a category');
      return;
    }

    try {
      const response = await fetch('https://kimryan707.pythonanywhere.com/get_exercises', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'muscle category': selectedCategory }),
      });

      if (response.ok) {
        const data = await response.json();
        const formattedData = Object.entries(data).map(([exerciseName, { url }]) => ({ exerciseName, url }));
        setExerciseData(formattedData);
        console.log('Exercise Data:', formattedData); // Log the search results to the console
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error(error);
      // Handle error states or display error message to the user
    }
  };
  const muscleCategories = [
    'chest',
    'forearms',
    'lats',
    'middle back',
    'lower back',
    'neck',
    'quadriceps',
    'hamstrings',
    'calves',
    'triceps',
    'traps',
    'shoulders',
    'abdominals',
    'glutes',
    'biceps',
    'adductors',
    'abductors',
  ];

  return (
    <>
      <h2> Find Exercises </h2>
      <p>Use the drop-down below to find popular exercises based on the muscle category.</p>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Select a category</option>
        {muscleCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Search</button>
      {exerciseData.length > 0 && (
        <div>
          <h3>Exercise Data for {selectedCategory}</h3>
          <table>
            <thead>
              <tr>
                <th>Exercise Name</th>
                <th>Learn More</th>
              </tr>
            </thead>
            <tbody>
              {exerciseData.map(({ exerciseName, url }, index) => (
                <tr key={index}>
                  <td>{exerciseName}</td>
                  <td>
                    <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default FindExercises;
