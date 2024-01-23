import PropTypes from 'prop-types';
import {
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts';

ScoreRadialBarChart.propTypes = {
  data: PropTypes.object,
};

function ScoreRadialBarChart({ data }) {
  console.log(data.scoreData);
  return (
    <div className='radialBarChart'>
      <h4 className='radialBarChart__title'>Score</h4>
      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart
          cy={90}
          innerRadius='180%'
          outerRadius='70%'
          fill='#FF0000'
          barSize={10}
          startAngle={200}
          endAngle={-360}
          data={data.scoreData}
        >
          <circle
            className='whiteCircle'
            cx='50%'
            cy={90}
            r='31%'
            stroke='none'
            fill='white'
          />
          <PolarAngleAxis
            type='number'
            domain={[0, 100]} // Set domain from 0 to 1 for fractional values
            tick={false}
          />
          <RadialBar background={false} cornerRadius={10} dataKey='value' />
        </RadialBarChart>
      </ResponsiveContainer>
      <RenderLegend value={data.scoreData[0].value} />
    </div>
  );
}

const RenderLegend = ({ value }) => {
  return (
    <div className='radialBarChart__legend'>
      <h4 className='radialBarChart__legend-title'>{`${value}%`}</h4>
      <span className='radialBarChart__legend-text'>de votre objectif</span>
    </div>
  );
};

RenderLegend.propTypes = {
  value: PropTypes.number,
};

export default ScoreRadialBarChart;
