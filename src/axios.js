import axios from 'axios';

const instance = axios.create( {
  baseURL: 'https://us-central1-clone-756de.cloudfunctions.net/api' //The API (cloud function) URL
});

export default instance;

//http://localhost:5001/clone-756de/us-central1/api
