import React, { useState } from 'react';
import './App.css';
import generateImage from './image';

function App() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    const newImageUrl = await generateImage(text);
    setImageUrl(newImageUrl);
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>DALL-E Image Generator</h1>
      <input
        type="text"
        placeholder="Enter prompt"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Generate Image</button>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          imageUrl && <img src={imageUrl} alt="Generated content" />
        )}
      </div>
    </div>
  );
}

export default App;
