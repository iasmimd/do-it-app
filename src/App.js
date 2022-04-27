import GlobalStyle from './styles/global'
import Routes from "./routes";
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ className: "", style: {} }}
      />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
