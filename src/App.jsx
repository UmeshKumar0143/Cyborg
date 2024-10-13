import React, { useState ,useEffect} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sponser from './components/Sponser'
import Events from './components/Events'
import Groups from './components/Groups'
import Team from './components/Team'
import Ourmember from './components/Ourmember'
import Joinus from './components/joinus'
import Footer from './components/Footer'

const App = () => {
  const [darkmode, setdarkmode] = useState(false); 
  const [rtlMode, setRtlMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const toggleDarkMode = () =>{
    setdarkmode(!darkmode);
  }

  useEffect(() => {
    const rtlLanguages = ['ar', 'he', 'fa']; 
    setRtlMode(rtlLanguages.includes(language));

    document.documentElement.setAttribute('lang', language);
    
    document.documentElement.setAttribute('dir', rtlMode ? 'rtl' : 'ltr');
  }, [language]);
  return (
    <div className={`${darkmode? 'dark': ""} ${rtlMode ? 'rtl' : 'ltr'}`}>
      <div className='bg-white dark:bg-black text-black dark:text-white min-h-screen'>
      <Navbar toggleDarkMode = {toggleDarkMode} darkmode = {darkmode} 
          changeLanguage={changeLanguage} language={language}/>
      <Hero />
      <Sponser />
      <Events/>
      <Groups />
      <Team />
      <Ourmember />
      <Joinus/>
      <Footer/>
    </div>
    </div>
  )
}

export default App