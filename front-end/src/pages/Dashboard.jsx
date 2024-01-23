import ActivityBarchart from '../components/ActivityBarchart';
import AverageLineChart from '../components/AverageLineChart';
import PerformanceRadarchart from '../components/PerformanceRadarchart';
import ScoreRadialBarChart from '../components/ScoreRadialbarchart';
import useFetch from '../service/UseFetch';

function Dashboard() {
  // Change the id here to change user.
  const userId = 12;

  const { data, loading, error } = useFetch('user', userId);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;
  if (!data) return <div>Aucune donnée trouvée</div>;

  return (
    <article className='article'>
      <div className='article__header'>
        <h1>
          Bonjour{' '}
          <span className='article__header--firstName'>
            {data.userInfos.firstName}
          </span>
        </h1>
        <p className='article__header--text'>
          Félicitation ! Vous avez explosé vos objectifs hier
        </p>
      </div>
      <div className='article__container'>
        <div className='charts'>
          <ActivityBarchart userId={userId} />
          <div className='charts__bottom'>
            <AverageLineChart userId={userId} />
            <PerformanceRadarchart userId={userId} />
            <ScoreRadialBarChart data={data}/>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Dashboard;
