import useFetch from '../service/UseFetch';

function Dashboard() {
  const userId = 18;

  const { data, loading, error } = useFetch('user', userId);

  console.log(data);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;
  if (!data) return <div>Aucune donnée trouvée</div>;

  return (
    <article>
      <div className='article__header'>
        <h1>
          Bonjour <span className='article__header--firstName'>{data.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
      </div>
    </article>
  );
}

export default Dashboard;
