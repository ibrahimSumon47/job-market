import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="font-bold text-4xl">This Q&A page</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        <div className="border rounded-lg bg-indigo-50 p-5">
          <h4 className="font-bold text-2xl">Q1. When should you use context API?</h4>
          <p className="mt-5 font-semibold">
            Ans. When consider using the Context API in React I need to manage
            global state and function among components in a more efficient and
            scalable way and when using props or other patterns become
            impractical.
          </p>
        </div>
        <div className="border rounded-lg bg-indigo-50 p-5">
          <h4 className="font-bold text-2xl">Q2. What is a custom hook?</h4>
          <p className="mt-5 font-semibold">
            Ans. Custom hook is a special JS function whose name starts with
            "use". This hook can used to call other hooks. A custom hook does
            not require a specific signature.
          </p>
        </div>
        <div className="border rounded-lg bg-indigo-50 p-5">
          <h4 className="font-bold text-2xl">Q3. What is useRef?</h4>
          <p className="mt-5 font-semibold">
            Ans. useRef is a built-in React hook that accepts one argument as
            the intial value and returns a reference. A reference is an object
            having a special property current.
          </p>
        </div>
        <div className="border rounded-lg bg-indigo-50 p-5">
          <h4 className="font-bold text-2xl">Q4. What is useMemo?</h4>
          <p className="mt-5 font-semibold">
            Ans. useMemo is a React Hook that lets you cache the result of
            calculation between re-renders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
