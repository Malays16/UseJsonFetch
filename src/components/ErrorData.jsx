import useJsonFetch from '../hooks/useJsonFetch';

const ErrorData = () => {
  const url = 'http://localhost:7070/error';
  const [data, loading, error] = useJsonFetch(url);

  return (
    <div>
      <h2>Error Data</h2>
      <p>{error && error.message}</p>
    </div>
  );
};

export default ErrorData;