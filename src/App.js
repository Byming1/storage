import React, { useState } from 'react';

import { supabase } from './supabaseClient'



function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updated, setUpdated] = useState(false);

  const testUpdate = async () => {

    const { error } = await supabase
      .from('movies')
      .update({ title: 'Test update' })
      .eq('id', 1)

    console.log(error)
    setLoading(false);
    setUpdated(true);
  }

  const testSelect = async () => {
    const { data, error } = await supabase.from('movies').select('*')
    if (error) {
      console.error('Error fetching movies:', error)
    } else {
      setMovies(data);
      setLoading(false);
    }
  }
  return (
    <div className="App">
      <h1>Welcome to the Store</h1>
      {loading && <button onClick={testUpdate}>Test Update</button>}
      {updated && <p>Update completed.</p>}
      <button onClick={testSelect}>Test Select</button>
      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
