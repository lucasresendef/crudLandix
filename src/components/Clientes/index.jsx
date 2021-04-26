import { useSeller } from '../contexts/sellerContext'
import styles from './styles.module.scss'

export function Clients(){

  const { 
     setNameClient,
     setType,
     setLimit,
     setCodeSeller,
     addClient,
  } = useSeller()
    
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1>Criar</h1>
            <h2>Clientes</h2>
        </div> 
        <div className={styles.input}>
         <label>Nome do cliente:</label>
         <input type='text'
          onChange={(event) => {
          setNameClient(event.target.value);
          }}/>
         <label>Tipo:</label>
         <input type='text'
          onChange={(event) => {
          setType(event.target.value);
          }}/>
         <label>Código do vendedor:</label>
         <input type='number'
          onChange={(event) => {
          setCodeSeller(event.target.value);
          }}/>
         <label>Límite de crédito:</label>
         <input type='number'
          onChange={(event) => {
          setLimit(event.target.value);
          }}/>
         <button onClick={addClient}>Criar</button>
        </div>
    </div>
 )
}