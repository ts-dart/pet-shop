import Header from './components/Header';
import Container from './components/Container';

import './styles/index.css';
import './styles/Header.css';
import './styles/Container.css';
import './styles/SendFeedback.css';
import './styles/RegisterPet.css';
import './styles/View.css';

function App() {
  return (
    <>
      {alert('A instancia permanece inativa quando não esta sendo usada, isso pode causar atraso no carregamento das informações.')}
      <Header/>
      <main>
        <Container /> 
      </main>
    </>
  );
}

export default App;
