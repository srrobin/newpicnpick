import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://www.picnpick.com/api/v1/${url}`);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message || 'Something went wrong');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, data, error };
};

export default useAxios;
