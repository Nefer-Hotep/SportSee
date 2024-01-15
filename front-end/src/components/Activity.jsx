import PropTypes from 'prop-types';
import useFetch from '../service/UseFetch';

Activity.propTypes = {
  userId: PropTypes.number,
};

function Activity({ userId }) {
  const { data, loading, error } = useFetch('activity', userId);

  console.log(data);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;
  if (!data) return <div>Aucune donnée trouvée</div>;

  return <div></div>;
}

export default Activity;
