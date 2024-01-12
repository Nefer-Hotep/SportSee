import { useState, useEffect } from 'react';
import {
  mapUserMainData,
  mapActivityData,
  mapUserPerformanceData,
  mapUserAverageSessionsData,
} from './mapper';

const useFetch = (endPoint, userId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url;
        // Détermination de l'URL en fonction de l'environnement
        if (import.meta.env.DEV) {
          // En mode développement, utilise les fichiers mockés
          url = `/mocks/${endPoint}.json`;
        } else if (endPoint === 'user') {
          // En mode production, utilise l'API
          // Assurez-vous que cette variable est définie dans vos fichiers .env
          const baseUrl = import.meta.env.VITE_API_URL;
          url = `${baseUrl}/${endPoint}/${userId}`;
        } else {
          const baseUrl = import.meta.env.VITE_API_URL;
          url = `${baseUrl}/user/${userId}/${endPoint}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        let jsonData = await response.json();

        if (import.meta.env.DEV) {
          jsonData = jsonData.find(
            (user) => user.userId === userId || user.id === userId
          );
        } else {
          jsonData = jsonData.data
        }

        switch (endPoint) {
          case 'activity':
            setData(mapActivityData(jsonData));
            break;
          case 'average-sessions':
            setData(mapUserAverageSessionsData(jsonData));
            break;
          case 'user':
            setData(mapUserMainData(jsonData));
            break;
          case 'performance':
            setData(mapUserPerformanceData(jsonData));
            break;
          default:
            setData(jsonData);
        }

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endPoint, userId]);

  return { data, loading, error };
};

export default useFetch;
