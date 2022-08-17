import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={ "Jane" } lastName={ "Doe" } age={ 45 } hairColor={ "Blak" } />
      <PersonCard firstName={ "John" } lastName={ "Smith" } age={ 88 } hairColor={ "Brown" } />
    </div>
  );
}

export default App;
