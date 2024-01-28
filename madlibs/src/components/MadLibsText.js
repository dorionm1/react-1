import './Component.css';

function MadLibsText({ noun, noun2, adjective, color, onBtnClick}) {  
    const newStory = `There was a ${noun} ${noun2} who loved a ${adjective} ${color}`;
     return (
      <div>
        <div>{newStory}</div>
        <button onClick={onBtnClick} id="restart">Restart</button>
      </div>
    );
  };
  
  export default MadLibsText;