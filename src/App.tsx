import { QueryClient, QueryClientProvider } from "react-query";
import Characters from "./Characters";

import "./App.css";

const QUERY_CLIENT = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      <div className="app">
        <h1 className="title white">List of Character</h1>
        <Characters />
      </div>
    </QueryClientProvider>
  );
}

export default App;
