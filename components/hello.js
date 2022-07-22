import { useEffect } from 'react';

export default function Hello() {
  useEffect(() => {
    console.log('Hello');
  })
  return (
    <div>
      <h1>Hello</h1>
      <p>This is a simple example of a React component.</p>
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text</button>
    </div>
  );
}