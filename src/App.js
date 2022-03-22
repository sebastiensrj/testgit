import './App.css';
import Bonjour from './components/bonjour/Bonjour';

import Welcome from './components/welcome/Welcome';
import { nanoid } from "nanoid"
import MagasinPrixItem from './components/magasinprix/MagasinPrixItem';

function App() {

  const magasinpri = [
    { id: nanoid(), name: "frite", prix: "0.80", promo: 12 },
    { id: nanoid(), name: "frais", prix: "4.99", promo: 14 },
    { id: nanoid(), name:"pomme", prix: "1.20", promo: 5 }
  ]

  return (
    <div className="App">
      <MagasinPrixItem name={magasinpri[0].name} prix={magasinpri[0].prix}
                        promo={magasinpri[0].promo}></MagasinPrixItem>
    </div>
  );
}

export default App;
