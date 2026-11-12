import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const [greeting, setGreeting] = useState(messages[0]);

  const changeGreeting = () => {
    setGreeting((currentGreeting) => {
      const availableMessages = messages.filter((message) => message !== currentGreeting);
      const choices = availableMessages.length > 0 ? availableMessages : messages;
      return choices[Math.floor(Math.random() * choices.length)];
    });
  };

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button 
      style={{ cursor: 'pointer', backgroundColor: '#fd2489', fontSize: '16px', padding: '10px 20px', borderRadius: '5px', color: '#ffffff', border: 'none' }} 
      onClick={changeGreeting}
      >
        New Greeting
      </button>
    </div>
  );
}