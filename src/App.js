/* eslint-disable array-callback-return */
// useContext
// import React from "react";
// import FunctionContextComponent from "./useContext/FunctionContextComponent";
// import { ThemeProvider } from "./useContext/ThemeContext";

// function App() {
//   return (
//     <ThemeProvider>
//       <FunctionContextComponent />
//     </ThemeProvider>
//   );
// }

// export default App;

// useContext end

// useMemo

import React, { useState , useMemo, useEffect } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    
   return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return{
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "#CCC" : "#333",
    }
  },[dark]);

  const handleNumberChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  const handleButtonChange = () => {
    setDark(!dark);
  };

  function slowFunction (num) {
    for(let i=0; i <= 10000000; i++) {
    }
    console.log("Calling slow");

    return num*2;
  }

  useEffect(() => {
    console.log('Theme Changed')
  },[themeStyles]);

  return (
    <>
      <input type="number" value={number} onChange={handleNumberChange} />
      <button onClick={handleButtonChange}>Change theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

// useMemo end

// useRef
// import React, { useState , useRef, useEffect } from "react";

// export default function App(){

//   const [name, setName] = useState('');
//   const prevName = useRef('');
//   const inputRef = useRef();

//   useEffect(() => {

//     prevName.current = name;
//   },[name]);

//   const handleChange = (e) => {
//     setName(e.target.value);
// }

// const handleFocus = (e) => {
//    inputRef.current.focus();
//    inputRef.current.value = "Hello World";
// }

//   return(
//     <>
//       <input ref={inputRef} value={name} onChange={handleChange} />
//       <div>My name is {name} and previous name is {prevName.current}</div>
//       <button onClick={handleFocus}>Focus</button>
//     </>

//   )
// }
// end useRef

// useReducer
// import React, { useState, useReducer } from "react";
// import Todo from "./useReducer/Todo";

// export const ACTIONS = {
//   ADD_TODO: "add-todo",
//   TOGGLE_TODO: "toggle-todo",
//   DELETE_TODO: "delete-todo",
// };
// export default function App() {
//   const reducer = (todos, action) => {
//     console.log(todos);
//     if (action.type === ACTIONS.ADD_TODO) {
//       return [...todos, newTodo(action.payload.name)];
//     } else if (action.type === ACTIONS.TOGGLE_TODO) {
//       console.log(todos);

//       return todos.map((todo) => {
//         if (todo.id === action.payload.id) {
//           return { ...todo, complete: !todo.complete };
//         }
//         return todo;
//       });
//     } else if (action.type === ACTIONS.DELETE_TODO) {
//       console.log(todos);

//       // eslint-disable-next-line no-unused-expressions
//       return todos.filter((todo) => todo.id !== action.payload.id);
//     } else {
//       return todos;
//     }
//   };

//   function newTodo(name) {
//     return { id: Date.now(), name: name, complete: false };
//   }

//   const [todos, dispatch] = useReducer(reducer, []);
//   const [name, setName] = useState("");

//   console.log(todos);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
//     setName("");
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </form>

//       {todos.map((todo) => {
//         return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
//       })}
//     </>
//   );
// }
// useReducer end

// useCallback
// import React, { useState, useCallback } from "react";
// import List from "./useCallback/List";

// export default function App() {
//   const [number, setNumber] = useState(1);
//   const [dark, setDark] = useState(false);

//   const theme = {
//     backgroundColor: dark ? "#333" : "#FFF",
//     color: dark ? "#FFF" : "#333",
//   };

//   const getItems = useCallback((incrementor) => {
//     console.log(incrementor);
//     return [number  + incrementor, number + 1 + incrementor, number + 2 + incrementor];
//   },[number]);

//   return (
//     <div style={theme}>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//       />
//       <button onClick={() => setDark(!dark)}>
//         Toggle theme
//       </button>
//       <List getItems={getItems}/>
//     </div>
//   );
// }
// useCallback end
