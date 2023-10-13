import Dropdown from './components/Dropdown';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Dropdown items={['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard']} />

      <Dropdown items={['Adriana C. Ocampo Uria', 'Albert Einstein', 'Anna K. Behrensmeyer', 'Blaise Pascal', 'Caroline Herschel', 'Cecilia Payne-Gaposchkin', 'Chien-Shiung Wu', 'Dorothy Hodgkin', 'Edmond Halley', 'Edwin Powell Hubble', 'Elizabeth Blackburn', 'Enrico Fermi', 'Erwin Schroedinger', 'Flossie Wong-Staal', 'Frieda Robscheit-Robbins', 'Geraldine Seydoux', 'Gertrude B. Elion', 'Ingrid Daubechies', 'Jacqueline K. Barton', 'Jane Goodall', 'Jocelyn Bell Burnell', 'Johannes Kepler', 'Lene Vestergaard Hau', 'Lise Meitner', 'Lord Kelvin', 'Maria Mitchell', 'Marie Curie', 'Max Born', 'Max Planck', 'Melissa Franklin', 'Michael Faraday', 'Mildred S. Dresselhaus', 'Nicolaus Copernicus', 'Niels Bohr', 'Patricia S. Goldman-Rakic', 'Patty Jo Watson', 'Polly Matzinger', 'Richard Phillips Feynman', 'Rita Levi-Montalcini', 'Rosalind Franklin', 'Ruzena Bajcsy', 'Sarah Boysen', 'Shannon W. Lucid', 'Shirley Ann Jackson', 'Sir Ernest Rutherford', 'Sir Isaac Newton', 'Stephen Hawking', 'Werner Karl Heisenberg', 'Wilhelm Conrad Roentgen', 'Wolfgang Ernst Pauli']} isMulti />
    </div>
  );
}

export default App;
