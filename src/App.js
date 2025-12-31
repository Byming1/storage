import React from 'react';

import { supabase } from './supabaseClient'

const testUpdate = async () => {
  const { error } = await supabase
    .from('movies')
    .update({ title: 'UPDATE FROM LOCAL' })
    .eq('id', 1)

  console.log(error)
}




function App() {
  return (
    <div className="App">
      <h1>Welcome to the Store</h1>
      <button onClick={testUpdate}>Test Update</button>
    </div>
  );
}

export default App;
