import './App.css';
import Homepage from './screens/Homepage';
import Navbar from './screens/Navbar';
import Footer from './screens/Footer';
import Whywebsite from './screens/Whywebsite';
import Services from './screens/Services'
import Page4 from './screens/Page4';
import More from './screens/More';



function App() {
  return (
    <>
    
    <Navbar />
    <Homepage />
    <Whywebsite />
    <Services />
    <Page4 />
    <More />
    <Footer />



    {/* axios.post('http://your-python-backend-url/send_message', { user_message: userInput })
  .then(response => {
    
    console.log(response.data.bot_response);
  })
  .catch(error => {
    console.error('Error sending message:', error);
  }); */}

    
    
    </>
  );
}

export default App;
