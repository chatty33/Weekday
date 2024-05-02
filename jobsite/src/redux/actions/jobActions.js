import axios from 'axios';

export const fetchJobs = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        limit: 10,
        offset: 0
      });
      const jobs = JSON.parse(response.data);
      dispatch({ type: 'FETCH_JOBS_SUCCESS', payload: jobs });
    } catch (error) {
      dispatch({ type: 'FETCH_JOBS_FAILURE', payload: error.message });
    }
  };
};
