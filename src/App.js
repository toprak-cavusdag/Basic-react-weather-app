import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY } from './const';
import City from './components/City';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { fontSize } from '@mui/system';

function App() {
  const [city, setCity] = useState([]);
  const [search, setSearch] = useState('ankara');
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    console.log(active);
  };
  useEffect(() => {
    async function getAPI() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`
        );
        console.log(response);
        setCity('');
        setCity(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getAPI();
  }, [search]);

  return (
    <div
      className={`flex justify-center items-center h-screen rounded-md w-full bg-main relative`}
    >
      <div className='mb-3 pt-0 bg-white p-5 shadow rounded'>
        <p className='text-2xl font-bold text-center py-5 flex items-center justify-center'>
          {' '}
          <WbSunnyIcon
            className='text-orange-500 spinner mr-1'
            style={{ fontSize: '35px' }}
          />{' '}
          Havacım
        </p>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type='text'
          placeholder='Lütfen bir şehir arayın'
          className='px-3 py-3 my-5 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-[250px]'
        />
        <City city={city} />

        <p
          className='p-2 bg-white flex justify-center items-center text-sm bottom-3 center text-gray-400 absolute rounded-full'
          onClick={() => handleClick()}
        >
          Created by Toprak Çavuşdağ
        </p>
      </div>
    </div>
  );
}

export default App;
