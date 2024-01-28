import './Component.css';

function MadLibsText({ noun, noun2, adjective, color, onBtnClick}) {  
    const stories = [
      `Within the ancient castle, there was a wise ${noun} ${noun2} who guarded a precious, ${adjective} ${color} book of forgotten spells.`,
      `In the enchanted forest, there was a mysterious ${noun} ${noun2} who discovered a magical ${adjective} ${color} potion.`,
      `On the bustling city streets, there was a curious ${noun} ${noun2} who stumbled upon a vibrant ${adjective} ${color} doorway to another dimension.`,
      `Amidst the starry night sky, there was a lonely ${noun} ${noun2} who yearned for a shimmering ${adjective} ${color} companion.`,
      `Beneath the ocean waves, there was a playful ${noun} ${noun2} who befriended a lively, ${adjective} ${color} school of fish.`,
      `At the top of the mountain peak, there was a resilient ${noun} ${noun2} who conquered a treacherous, ${adjective} ${color} path to find the legendary treasure.`,
      `Within the futuristic space station, there was a brilliant ${noun} ${noun2} who invented a revolutionary, ${adjective} ${color} device to explore distant galaxies.`,
      `In the quaint village square, there was an eccentric ${noun} ${noun2} who crafted whimsical, ${adjective} ${color} sculptures that captivated the entire community.`,
      `Along the moonlit beach, there was a romantic ${noun} ${noun2} who shared a passionate dance under the soft glow of a silver, ${adjective} ${color} moon.`,
      `Within the secret garden, there was a gentle ${noun} ${noun2} who nurtured a delicate, ${adjective} ${color} blossom with extraordinary healing properties.`
    ];

    const randNum = Math.floor(Math.random() * (stories.length+1))
    
     return (
      <div>
        <div>{stories[randNum]}</div>
        <button onClick={onBtnClick} id="restart">Restart</button>
      </div>
    );
  };
  
  export default MadLibsText;