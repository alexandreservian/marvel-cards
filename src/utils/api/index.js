import axios from 'axios';
import { apiConfig } from 'config-project';

const { baseURL } = apiConfig;

export default axios.create({
  baseURL
});
