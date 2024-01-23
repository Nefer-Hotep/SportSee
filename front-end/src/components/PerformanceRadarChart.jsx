import PropTypes from 'prop-types';
import useFetch from '../service/UseFetch';
import {
  RadarChart,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Text,
} from 'recharts';

PerformanceRadarchart.propTypes = {
  userId: PropTypes.number,
};

function PerformanceRadarchart({ userId }) {
  const { data, loading, error } = useFetch('performance', userId);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;
  if (!data) return <div>Aucune donnée trouvée</div>;

  return (
    <div className='RadarBarChart'>
      <ResponsiveContainer height='100%' width='100%'>
        <RadarChart outerRadius={90} data={data?.data}>
          <PolarGrid
            gridType='polygon'
            radialLines={false}
            polarRadius={[0, 10, 27, 49, 72, 95]}
          />
          <PolarAngleAxis
            dataKey='kind'
            tick={(props) => renderPolarAngleAxis(props)}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            dataKey='value'
            fill='#FF0101
            '
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
  return (
    <Text
      {...rest}
      fill='white'
      fontSize='12px'
      verticalAnchor='middle'
      x={x + (x - cx) / 50}
      y={y + (y - cy) / 9}
    >
      {payload.value}
    </Text>
  );
}

export default PerformanceRadarchart;
