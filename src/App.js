import logo from './logo.svg';
import './App.css';


const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

const ShopItemFunc = ({item}) => (
  <div className="main-content">
  <h2>{ item.brand }</h2>
  <h1>{ item.title }</h1>
  <h3>{ item.description }</h3>
  <div className="description">{ item.descriptionFull }</div>
  <div className="highlight-window mobile">
    <div className="highlight-overlay"></div>
  </div>
  <div className="divider"></div>
  <div className="purchase-info">
    <div className="price">{ item.currency+item.price.toFixed(2) }</div>
    <button>Добавить в корзину</button>
  </div>
</div>
)


function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
  )
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
