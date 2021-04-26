import { useSeller } from '../contexts/sellerContext';
import styles from './styles.module.scss'

export function EditClient(){

  const { 
    setNewNameClient,
    setNewType,
    setNewLimit,
    setNewCodeSeller,
    updateClient
  }
   = useSeller();
    
  return (
    <div className={styles.container}>
        <div className={styles.header}>    
            <h1>Editar</h1>
            <h2>Clientes</h2>
        </div>
          <div className={styles.input}>
          <label>Nome do Cliente:</label>
          <input type='text' 
          onChange={(event) => {
          setNewNameClient(event.target.value);
          }}/>
          <label>Tipo (PF/PJ)</label>
          <input type='text' 
          onChange={(event) => {
          setNewType(event.target.value);
          }}/>
          <label>Limite de Crédito</label>
          <input type='number' 
          onChange={(event) => {
          setNewLimit(event.target.value);
          }}/>
          <label>Código do vendedor</label>
          <input type='number' 
          onChange={(event) => {
          setNewCodeSeller(event.target.value);
          }}/>

         <button onClick={updateClient(8)}>Editar</button>
         </div>
    </div>
 )
}