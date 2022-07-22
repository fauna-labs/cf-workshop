import { useEffect } from 'react';

export default function Hello() {
  useEffect(() => {
    console.log('Hello');
  })
  return (
    <div>
      <h1>Hello</h1>
      <p>This is a simple example of a React component.</p>
    </div>
  );
}