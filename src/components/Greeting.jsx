import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button 
      style={{ cursor: 'pointer', backgroundColor: '#fd2489', fontSize: '16px', padding: '10px 20px', borderRadius: '5px', color: '#ffffff', border: 'none' }} 
      onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </div>
  );
}