import useJsonFetch from '../hooks/useJsonFetch';

const SuccessData = () => {
  const url = 'http://localhost:7070/data';
  const [data, loading, error] = useJsonFetch(url);

  return (
    <div>
      <h2>Success Data</h2>
      <p>Status: {data && data.status}</p>
    </div>
  );
};

export default SuccessData;