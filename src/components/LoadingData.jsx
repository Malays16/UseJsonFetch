import useJsonFetch from '../hooks/useJsonFetch';

const LoadingData = () => {
  const url = 'http://localhost:7070/loading';
  const [data, loading, error] = useJsonFetch(url);

  if (loading) {
    return <span className="loader"></span>;
  }

  return (
    <div>
      <h2>Loading Data</h2>
      <p>Status: {data && data.status}</p>
    </div>
  );
};

export default LoadingData;