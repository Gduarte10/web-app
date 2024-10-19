import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [filmes, setFilmes] = useState ({Search: [] });
  const [searchTerm,setSeartchTrem] = useState('');

const fetchFilmes = async (term) => {
  try {
    const response = await
      fetch(`https://www.omdbapi.com/?apikey=8eb7eac4&s=${term}&type=movie&plot=full`);
    const data = await response.json();

    if (data.Response === 'True') {
      setFilmes(data);
    }else {
      console.error('Erro ao buscar filmes:', data.Error);
    }
  }catch (error) {
    console.error ('Erro ao fazer a requisição:', error);
  }
};

useEffect(() => 
  {
    fetchFilmes(searchTerm);
  }, [searchTerm]) 

  const handlaSearch = (event) => {
    event.preventDefault();
    fetchFilmes(searchTerm);
  };


  return (
    <div className="App">
      <div className='boxFilmes'>
        <h2>buscar filmes:</h2>
        <form onSubmit={handlaSearch}>
          <input 
          type='text'
          value={searchTerm}
          onChange={(e) => setSeartchTrem(e.target.value)}
          placeholder='Digite o nome do filme'
          ></input>
          <button type='submit'>buscar</button>
        </form>
        <div className='filmesGrid'>
          {filmes.Search.map((filme) => (
            <div className='filmesCard'>
              <h3>{filme.Title}</h3>
              <img src= {filme.Poster}></img>
              <p>Ano: {filme.Year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
