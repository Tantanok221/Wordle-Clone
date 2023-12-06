import Game from '../Game';
import Header from '../Header';
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Analytics />
      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default App;
