import PropTypes from 'prop-types';
import useFetch from '../service/UseFetch';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from 'recharts';

AverageLineChart.propTypes = {
  userId: PropTypes.number,
};

function AverageLineChart({ userId }) {
  const { data, loading, error } = useFetch('average-sessions', userId);
  if (data) {
    addNullEntries(data);
  }
  console.log(data);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;
  if (!data) return <div>Aucune donnée trouvée</div>;

  return (
    <div className='linechart'>
      <h4 className='linechart__legend'>
        Durée moyenne des <br />
        sessions
      </h4>
      <ResponsiveContainer height='100%' width='100%'>
        <LineChart
          margin={{ top: 80, right: -15, left: -15, bottom: 20 }}
          data={data.sessions}
          className='linechart__body'
        >
          <defs>
            <linearGradient id='colorUv' x1='1' y1='1' x2='0' y2='1'>
              <stop offset='1.19%' stopColor='#FFFFFF' />
              <stop offset='80%' stopColor='rgba(255, 255, 255, 0.403191)' />
            </linearGradient>
          </defs>
          <XAxis
            dataKey='day'
            tickLine={false}
            axisLine={false}
            tick={<CustomizedAxisTick />}
          />
          <YAxis hide />
          <Tooltip cursor={<CustomCursor />} content={<CustomTooltip />} />
          <Line
            type='monotone'
            dataKey='sessionLength'
            stroke='url(#colorUv)'
            dot={false}
            strokeWidth={2}
            activeDot={{ fill: '#ffffff' }}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='linechart__Tooltip'>
        <p>{`${payload[0].value}min`}</p>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

const CustomCursor = ({ points }) => {
  const { x, y } = points[0];
  return (
    <Rectangle
      fill='black'
      opacity={0.1}
      x={x}
      y={y - 100}
      width={1000}
      height={500}
    />
  );
};

CustomCursor.propTypes = {
  points: PropTypes.array,
};

const CustomizedAxisTick = ({ payload, x }) => {
  // Modify the x axis tick to be aligned with the cursor
  const Xaxis = x - 4;

  return (
    <text className='linechart__axistick' transform={`translate(${Xaxis},235)`}>
      {payload.value}
    </text>
  );
};

CustomizedAxisTick.propTypes = {
  payload: PropTypes.object,
  x: PropTypes.number,
  y: PropTypes.number,
};

// Function to add null entries at the start and end of the sessions array
function addNullEntries(data) {
  // Check and add a null entry at the start if not present
  if (!data.sessions.length || data.sessions[0].day !== null) {
    data.sessions.unshift({ "day": null, "sessionLength": 0 });
}

  // Check and add a null entry at the end if not present
  if (!data.sessions.length || data.sessions[data.sessions.length - 1].day !== null) {
    data.sessions.push({ "day": null, "sessionLength": 0 });
}
}

export default AverageLineChart;
