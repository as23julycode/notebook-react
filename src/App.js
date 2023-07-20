
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    <Navbar firstcolumn = "Aditya Singh" secondcolumn = "Project" thirdcolumn = "About Me(Aditya Singh)"  />

    <div className='container my-3'>
      <TextForm heading="Enter text to analyse"/>
    </div>
    </>
  );
}

export default App;
