import './App.css';

const filmes = {
  search: [
    {
      title: '+ velozes + furiosos',
      year: '2003',
      poster: 'https://m.aabbportoalegre.com.br/intranet/modulos/biblioteca/imgs/3145.jpg',
    },
    {
      title: 'Mad Max ',
      year: '1979',
      poster: 'https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_.jpg',
    },
    {
      title: 'Como Sobreviver a um Ataque Zumbi',
      year: ' 2015',
      poster: 'https://cinepop.com.br/wp-content/uploads/2015/08/comosobreviveraumataquezumb.jpg',
    },
    {
      title: 'Uma Noite de Crime - Anarquia',
      year: '2021',
      poster: 'https://br.web.img2.acsta.net/pictures/14/11/25/16/16/015135.jpg',
    },
    {
      title: 'A Morte Te Dá Parabéns',
      year: '2017',
      poster: 'https://br.web.img3.acsta.net/pictures/17/07/13/21/40/079851.jpg',
    },
  ]
}

function App() {
  return (
    <div className="App">
      <div className='boxFilmes'>
        <h2>buscar filmes:</h2>
        <form>
          <input placeholder='Digite o nome do filme ...'/>
          <button type='submit'>Buscar</button>
        </form>
        <div className='filmesGrid'>
          {filmes.search.map((filme) => (
            <div className='filmesCard'>
              <h3>{filme.title}</h3>
              <img src= {filme.poster}></img>
              <p>Ano: {filme.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
