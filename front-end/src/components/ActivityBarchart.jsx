import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Text,
  CartesianGrid,
  Rectangle
} from 'recharts';
import useFetch from '../service/UseFetch';

ActivityBarchart.propTypes = {
  userId: PropTypes.number,
};

function ActivityBarchart({ userId }) {
  const { data, loading, error } = useFetch('activity', userId);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;
  if (!data) return <div>Aucune donnée trouvée</div>;

  return (
    <div className='barchart'>
      <ResponsiveContainer>
        <BarChart
          data={data.sessions}
          margin={{
            top: 63,
            left: 43,
            right: 29,
            bottom: 23,
          }}
          barGap={8}
        >
          <Text />
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis
            dataKey='day'
            tickLine={false}
            axisLine={false}
            padding={{ left: -45, right: -47 }}
          />
          <XAxis
            dataKey='calories'
            type='number'
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            dataKey='kilogram'
            type='number'
            tickLine={false}
            tickMargin={25}
            orientation='right'
            axisLine={false}
            domain={['dataMin - 2', 'dataMax + 1']}
            tickCount="3"
          />
          <YAxis
            dataKey='calories'
            type='number'
            yAxisId='calorie'
            domain={['dataMin - 80', 'dataMax + 10']}
            hide
          />
          <Tooltip content={<CustomTooltip />}  />
          
          <Legend
            iconSize={8}
            verticalAlign='top'
            align='right'
            wrapperStyle={{
              top: '20px',
              right: '26px',
              fontSize: 15,
            }}
            iconType='circle'
            content={<CustomLegend />}
          />
          <Bar
            name='Poids (kg)'
            dataKey='kilogram'
            radius={[10, 10, 0, 0]}
            barSize={7}
            fill='#282D30'
          />
          <Bar
            name='Calories brûlées (kCal)'
            dataKey='calories'
            radius={[10, 10, 0, 0]}
            barSize={7}
            yAxisId='calorie'
            fill='#E60000'
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
function CustomizedCursor({ points }) {
  return (
    <Rectangle
      fill="black"
      opacity={0.1}
      x={points[1].x}
      width={500}
      height={300}
    />
  );
}

CustomizedCursor.propTypes = {
  points: PropTypes.string,
};

const CustomLegend = ({ payload }) => {
  return (
    <div className='barchart__legend'>
      <h4 className='barchart__title'>Activité quotidienne</h4>
      <ul className='barchart__type'>
        <div className='barchart__type--box'>
          <div className='barchart__circle--black'></div>
          <li key={`item-${payload[1].value}`} className='barchart__type--text'>
            {payload[0].value}
          </li>
        </div>
        <div className='barchart__type--box'>
          <div className='barchart__circle--red'></div>
          <li key={`item-${payload[0].value}`} className='barchart__type--text'>
            {payload[1].value}
          </li>
        </div>
      </ul>
    </div>
  );
};

CustomLegend.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='customTooltip'>
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

export default ActivityBarchart;
