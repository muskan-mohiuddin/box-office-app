import { useParams } from 'react-router-dom';
import { getShowId } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';

const Show = () => {
  const { showId } = useParams();
  //const { showData, showError } = useShowId(showId);

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowId(showId),
  });

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }

  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }

  return <div>data is loading</div>;
};
export default Show;
