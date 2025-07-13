import styled from 'styled-components';
import DashboardBox from './DashboardBox';
import Heading from '../../ui/Heading';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const StyledSalesChart = styled(DashboardBox)`
  /* grid-column: 1 / -1; */

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

const data = [
  {
    name: 'Januari 2025',
    projects: 4000,
    news: 2400,
    amt: 2400,
  },
  {
    name: 'Februari 2025',
    projects: 3000,
    news: 1398,
    amt: 2210,
  },
  {
    name: 'Maret 2025',
    projects: 2000,
    news: 9800,
    amt: 2290,
  },
  {
    name: 'April 2025',
    projects: 2780,
    news: 3908,
    amt: 2000,
  },
  {
    name: 'Mei 2025',
    projects: 1890,
    news: 4800,
    amt: 2181,
  },
  {
    name: 'Juni 2025',
    projects: 2390,
    news: 3800,
    amt: 2500,
  },
  {
    name: 'Juli 2025',
    projects: 3490,
    news: 4300,
    amt: 2100,
  },
];

const CustomTick = ({ x, y, payload }) => {
  const [month, year] = payload.value.split(' ');
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor='middle' fill='#666' fontSize='12'>
        {month}
      </text>
      <text x={0} y={0} dy={30} textAnchor='middle' fill='#999' fontSize='11'>
        {year}
      </text>
    </g>
  );
};

function AnalyticsBarChart() {
  return (
    <StyledSalesChart>
      <Heading as='h2'>Analytics Summary</Heading>

      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={200}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap={24}
          barGap={4}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' tick={CustomTick} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey='projects'
            fill='#8884d8'
            activeBar={<Rectangle fill='pink' stroke='blue' />}
            barSize={14}
          />
          <Bar
            dataKey='news'
            fill='#82ca9d'
            activeBar={<Rectangle fill='gold' stroke='purple' />}
            barSize={14}
          />
        </BarChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default AnalyticsBarChart;
