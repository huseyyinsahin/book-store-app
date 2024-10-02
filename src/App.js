import { AlertProvider } from "./context/AlertProvider";
import AuthProvider from "./context/AuthProvider";
import BasketProvider from "./context/BasketProvider";
import BookProvider from "./context/BookProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AlertProvider>
        <AuthProvider>
          <BasketProvider>
            <BookProvider>
              <AppRouter />
            </BookProvider>
          </BasketProvider>
        </AuthProvider>
      </AlertProvider>
    </div>
  );
}

export default App;
