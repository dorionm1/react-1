function MadLibsText({ noun, noun2, adjective, color}) {  
    const newStory = `There was a ${noun} ${noun2} who loved a ${adjective} ${color}`;
     return (
        <div>{newStory}</div>
    );
  };
  
  export default MadLibsText;