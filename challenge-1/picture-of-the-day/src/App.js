import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from './logo.svg';
import MediaSnippet from './atoms/media/MediaSnippet';
import './App.css';

export async function getPicture(date) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const searchUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
  try {
    const response = await axios({
      url: searchUrl,
      method: 'GET',
    });
    return response;
  } catch (error) {
    console.log(error.data);
    return error;
  }
}

function App() {
  const [date, setDate] = useState('2021-11-11');
  const [media, setMedia] = useState({url:'logo192.png', media_type:'image'});
  //console.log(process.env)

  useEffect(() => {
    async function loadPicture() {
      const response = await getPicture(date);
      if (response.status === 200) {
        console.log(response.data)
        setDate(response.data.date);
        setMedia(response.data)
      }
    }
    loadPicture();
  }, [date]);

  return (
    <div className="App">
      <header className="App-header">
      <h1>{media.title}</h1>
      <MediaSnippet mediaType={media.media_type} url={media.url} />  
        <p>
          {media.explanation}
        </p>
      </header>
    </div>
  );
}

export default App;
