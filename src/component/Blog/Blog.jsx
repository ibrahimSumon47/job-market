import React from "react";

const Blog = () => {
  return (
    <div>
      <h2>This Q&A page</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        <div className="border rounded-lg bg-indigo-50 p-5">
          <h4>Q1. When should you use context API?</h4>
          <p>Ans. Contex API used when some data needs to be accessible by many components at different nesting levels.</p>
        </div>
        <div className="border rounded-lg bg-indigo-50 p-5">
            <h4>Q2. What is a custom hook?</h4>
            <p>Ans. Custom hook is a special JS function whose name starts with "use". This hook can used to call other hooks. A custom hook does not require a specific signature.</p>
        </div>
        <div className="border rounded-lg bg-indigo-50 p-5">
            <h4>Q3. What is useRef?</h4>
            <p>Ans. useRef is a built-in React hook that accepts one argument as the intial value and returns a reference. A reference is an object having a special property current.</p>
        </div>
        <div className="border rounded-lg bg-indigo-50 p-5">
            <h4>Q4. What is useMemo?</h4>
            <p>Ans. useMemo is a React Hook that lets you cache the result of calculation between re-renders.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
