import { useState } from 'react';

const btnStyle = "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-700 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

export default function EmailForm() {
  const [email, setEmail] = useState('');
  return (
    <div>
      <input 
        type="text" 
        placeholder="Email" 
        className="mb-2 mt-1 border p-2 border-slate-400 w-[32rem] rounded-md"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <button
        className={btnStyle}
        onClick={() => {
          setEmail('');
        }}
      >
        Subscribe
      </button>
    </div>
  );
}