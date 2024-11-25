/* area degli import, possiamo importare file presenti nella cartella src o altri componenti
import di foto che genera una variabile di tipo "logo"
 */
import logo from "./logo.svg";
import "./App.css";
import Bottone from "./components/Button";
import ImageComponent from "./components/ImageComponent";
//Le principali differenze con HTML:
//- class- diventa className
// i tag - img, br, hr - input son tag autoconclusivi quindi necessitano di una chiusura immediata con lo slash finale
//l' attributo per le label for diventa "htmlFor"

//tutto quello che non è una stringa in JSX va inserito tra le {}
//
function App() {
  const handleClick = () => {
    alert("magari fosse possibile!");
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1 className="bg-danger py-3 my-5 text-white">LEGGI SOTTO!!!</h1>
        <ImageComponent src="https://www.civitatis.com/f/pois/ChIJ4zGFAZpYwokRGUGph3Mf37k.jpg" alt="la grande mela da central park" />
      </div>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2 className="text-primary bg-warning mb-5 py-3 fs-1">Teletrasportati a New York</h2>
        <Bottone label="VAI!!" onClick={handleClick} />
      </div>
    </>
  );
}

export default App;
