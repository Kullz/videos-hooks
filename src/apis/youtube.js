import axios from 'axios';

const KEY = 'AIzaSyAu4wFpOeQSPlmsooA8arzs0dfxOyx_SJM';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      maxResults: 5,
      type: 'video',
      key: KEY,
   }
});