import { useState } from 'react';
import './App.css';
import MadLibsForm from './components/MadLibsForm';
import MadLibsText from './components/MadLibsText';
import MadLibsImages from './components/MadLibsImages';

function App() {
  const [word, setWords] = useState("");
  
  const handleFormSubmit = (values) => {
    const newWords = {
      noun: values.noun,
      noun2: values.noun2,
      adjective: values.adjective,
      color: values.color
    }
    setWords(newWords);
  };

  const handleResetClick = () => {
    setWords("")
  };

  return (
    <div>
      <MadLibsImages/>
      <div id="madlibsAppContainer">
        <h1>Mad Libs!</h1>
        {!word ?
        <MadLibsForm onFormSubmit={handleFormSubmit}/>
        :
        <MadLibsText noun={word.noun} noun2={word.noun2} adjective={word.adjective} color={word.color} onBtnClick={handleResetClick}/>
        }
      </div>
    </div>
  );
}

export default App;
