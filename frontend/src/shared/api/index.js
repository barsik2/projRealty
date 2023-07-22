import axios from 'axios';

import { API_BREAKPOINT } from 'src/shared/config';

const api = axios.create({
  baseURL: `${API_BREAKPOINT}api`,
  headers: {
    common: {
      'ngrok-skip-browser-warning': true,
      'Content-Type': 'application/json',
    },
  },
});

export default api;
