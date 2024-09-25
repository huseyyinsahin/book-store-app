import { AlertProvider } from "./context/AlertProvider";
import AuthProvider from "./context/AuthProvider";
import BasketProvider from "./context/BasketProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AlertProvider>
      <AuthProvider>
        <BasketProvider>
          <AppRouter />
        </BasketProvider>
      </AuthProvider>
      </AlertProvider>
    </div>
  );
}

export default App;
