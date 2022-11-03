import axios from "axios";
import { toast } from "react-toastify";
import icon from "../../assets/img/send-logo.svg";
import { BASE_URL } from "../../utils/request";
import './styles.css';



type Props = {
    saleId: Number;

}
function handleClick(id: Number){
    axios(`${BASE_URL}/sales/${id}/notification`)
      .then(response => {
       toast.info("SMS Enviado com sucesso!");
       console.log("entrou no metodo!!");
      
    }); 
}

function NotificationButton({saleId} : Props) {
    return (
        <>
        <div className="dsmeta-aplication-btn" onClick={()=>{handleClick(saleId)}} >

            <img src={icon} alt="Enviar Notificação SMS" />
           
        </div>


        </>
    )
}




export default NotificationButton;