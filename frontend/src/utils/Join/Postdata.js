import axios from 'axios';

export const postdata = async (path, data) => {
  return await axios.post(
    'http://localhost:9000/api/' + path,
    JSON.stringify(data),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
