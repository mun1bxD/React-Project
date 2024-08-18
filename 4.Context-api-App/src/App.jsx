
import MainPage from './components/MainPage.jsx';
import Navbar from './components/Navbar.jsx';
import ThemeProvider  from './contexts/ThemeProvider.jsx';
import LanguageProvider from './contexts/LanguageProvider.jsx';
function App() {


  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar/>
        <MainPage/>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
