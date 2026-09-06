import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>react Context api</h1>
    </UserContextProvider>
  );
}

export default App;
