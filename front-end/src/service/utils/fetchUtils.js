import {
  mapUserMainData,
  mapUserActivityData,
  mapUserPerformanceData,
  mapUserAverageSessionsData,
} from './mapper';

export const fetchData = async (endPoint, userId) => {
  let url = buildUrl(endPoint, userId);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  try {
    let jsonData = await response.json();
    return processJsonData(jsonData, endPoint, userId);
  } catch (error) {
    throw new Error('Error parsing JSON: ' + error.message);
  }
};

const processResponseData = (endPoint, jsonData) => {
  switch (endPoint) {
    case 'activity':
      return mapUserActivityData(jsonData);
    case 'average-sessions':
      return mapUserAverageSessionsData(jsonData);
    case 'user':
      return mapUserMainData(jsonData);
    case 'performance':
      return mapUserPerformanceData(jsonData);
    default:
      return jsonData;
  }
};

const processJsonData = (jsonData, endPoint, userId) => {
  if (import.meta.env.DEV) {
    jsonData = jsonData.find(
      (user) => user.userId === userId || user.id === userId
    );
  } else {
    jsonData = jsonData.data;
  }
  return processResponseData(endPoint, jsonData);
};

const buildUrl = (endPoint, userId) => {
  const baseUrl = import.meta.env.VITE_API_URL || '';
  const isDevMode = import.meta.env.DEV;

  if (isDevMode) {
    return `/mocks/${endPoint}.json`;
  }

  switch (endPoint) {
    case 'user':
      return `${baseUrl}/${endPoint}/${userId}`;
    default:
      return `${baseUrl}/user/${userId}/${endPoint}`;
  }
};
