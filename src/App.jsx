import SuccessData from './components/SuccessData';
import ErrorData from './components/ErrorData';
import LoadingData from './components/LoadingData';
import './App.css';

function App() {
  let status = 'success';
  return (
    <>
      {status === 'loading' && <LoadingData />}
      {status === 'success' && <SuccessData />}
      {status === 'error' && <ErrorData />}
    </>
  );
}

export default App;