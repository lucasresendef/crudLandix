import { useSeller } from '../contexts/sellerContext';
import styles from './styles.module.scss'


export function Modal(){

    const { clientList, deleteClient} = useSeller();

    return(
        <div className={styles.container}>
          <h1>Todos os Clientes</h1>  
              
              {clientList.map((value) => {
                  return (
                    <table key={value.cdcl}>
                    <thead>
                      <tr>
                        <th>Código do cliente</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Código do vendedor</th>
                        <th>Limite de Crédito</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr >
                      <td>{value.cdcl}</td>
                      <td>{value.dsnome}</td>
                      <td>{value.idtipo}</td>
                      <td>{value.cdvendedor}</td>
                      <td>R$ 
                        {value.dslim}
                      </td>
                      <td>
                      <button
                      type="button"
                      onClick={() => {
                        deleteClient(value.cdcl);
                      }}
                    >
                      Deletar Cliente
                    </button>
                      </td>
                    </tr>
                    </tbody>
                    </table>) 
          
                })}
        </div>
    )
}