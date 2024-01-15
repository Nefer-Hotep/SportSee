import { useState, useEffect } from 'react';
import { fetchData } from './utils/fetchUtils';

const useFetch = (endPoint, userId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAndProcess = async () => {
      try {
        const processedData = await fetchData(endPoint, userId);
        setData(processedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndProcess();
  }, [endPoint, userId]);

  return { data, loading, error };
};

export default useFetch;
