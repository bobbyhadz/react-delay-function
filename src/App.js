import './App.css';

import {useEffect} from 'react';

const delay = ms =>
  new Promise(resolve => setTimeout(resolve, ms));

const App = () => {
  const handleClick = async event => {
    console.log('before');

    await delay(1000);

    console.log('after');
  };

  useEffect(() => {
    async function makeRequest() {
      console.log('before');

      await delay(1000);

      console.log('after');
    }

    makeRequest();
  });

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
