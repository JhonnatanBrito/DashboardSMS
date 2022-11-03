import './styles.css';
import NotificationButton from '../NotificationButton';
import ReactDatePicker from 'react-datepicker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import { Sale } from '../../models/sale';


function Aplicacation() {

    
    const min =  new Date().setDate(new Date().getDate()- 365);
    const teste  =  new Date().setDate(new Date().getDate()-365);

    const [initialDate, setInitialDate] = useState(new Date());
    const [finalDate, setFinalDate] = useState(new Date());

    const dmin = initialDate.toISOString().slice(0,10);
    const dmax = finalDate.toISOString().slice(0,10);

//console.log(dmin);

    const [salesList, setSales] = useState<Sale[]>([])

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?initialDate=${dmin}&finalDate=${dmax}`)
        .then(response => {
            
            setSales(response.data.content);
          
        });

    }, [initialDate,finalDate]);

  
    return (
        <>
            <div className="dsmeta-card">
                <h2 className="Aplicacao-h2"> Aplicação: </h2>
                <div>
                    <div className="dsmeta-form-control-input">
                        <ReactDatePicker
                           selected={initialDate}
                            onChange={(date: Date) => setInitialDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                     </div>

                    <div className="dsmeta-form-control-input">

                        <DatePicker

                            selected={finalDate}
                            onChange={(date: Date) => setFinalDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                     </div>
                </div>
                <div>
                    <table className="dsmeta-aplication-table">
                        <thead>
                            <tr>
                                <th className="mostrar992px">ID</th>
                                <th className="mostrar576px">Data</th>
                                <th>Nome</th>
                                <th className="mostrar992px">Visitas</th>
                                <th className="mostrar992px">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                salesList.map(sale => {
                                    return (
                                        <tr key={sale.id}>
                                        <td className="mostrar992px">{sale.id}</td>
                                        <td className="mostrar576px">{new Date(sale.date).toLocaleDateString()}</td>
                                        <td>{sale.sellerName}</td>
                                        <td className="mostrar992px">{sale.visited}</td>
                                        <td className="mostrar992px">R$: {sale.deals.toFixed(2)}</td>
                                        <td>{sale.amount}</td>
                                        <td>
                                            <div className="dsmeta-aplication-btn-container">
                                                <NotificationButton saleId={sale.id} />
                                            </div>
                                        </td>
                                    </tr>
                                    )
                                })                           
                                
                             }

                           
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}




export default Aplicacation;