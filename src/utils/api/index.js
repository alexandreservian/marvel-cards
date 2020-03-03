import axios from 'axios';
import { apiConfig } from 'config-project';

const { baseURL, apikey } = apiConfig;

export default axios.create({
  baseURL,
  params: {
    apikey
  }
});
