import NotificationButton from "./components/NotificationButton";
import Header from "./components/Header";
import Aplicacation from "./components/Aplicacation";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
     <ToastContainer />
      <Header />

      <main>
        <section id="Aplicacation">
          <div className="dsmeta-container">
          
           <Aplicacation/>

          </div>
        </section>
      </main>



     

    </>
  )
}

export default App;
