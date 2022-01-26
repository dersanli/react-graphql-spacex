import React, { Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <h4>Loading...</h4>
      </Fragment>
    );
  }

  if (error) {
    console.error('ERROR: ', error);
    return <h4>Error...</h4>;
  }

  return (
    <Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      {data.launches.map((launch, index) => (
        <LaunchItem key={launch.flight_number + index} launch={launch} />
      ))}
    </Fragment>
  );
};

export default Launches;