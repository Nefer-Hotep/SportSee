// mapper.js
import UserActivityData from '../models/UserActivityData';
import UserAverageSessions from '../models/UserAverageSessions';
import UserMainData from '../models/UserMainData';
import UserPerformance from '../models/UserPerformance';

const mapUserActivityData = (data) => (data = new UserActivityData(data));
const mapUserAverageSessionsData = (data) =>
  (data = new UserAverageSessions(data));
const mapUserMainData = (data) => (data = new UserMainData(data));
const mapUserPerformanceData = (data) => (data = new UserPerformance(data));

export {
  mapUserMainData,
  mapUserActivityData,
  mapUserPerformanceData,
  mapUserAverageSessionsData,
};
