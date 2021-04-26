import { useSeller } from '../contexts/sellerContext';
import styles from './styles.module.scss'

export function EditSeller(){

  const { 
    setNewNameSeller,
    setNewPrice,
    setNewAgeSeller,
    updateSeller
  }
   = useSeller();
    
  return (
    <div className={styles.container}>
        <div className={styles.header}>    
            <h1>Editar</h1>
            <h2>Vendedores</h2>
        </div>
          <div className={styles.input}>
          <label>Nome do vendedor:</label>
          <input type='text' 
          onChange={(event) => {
          setNewNameSeller(event.target.value);
          }}/>
          <label>Cod. Tabela Preço:</label>
          <input type='number' 
          onChange={(event) => {
          setNewPrice(event.target.value);
          }}/>
          <label>Data de nascimento:</label>
          <input type='date' 
          onChange={(event) => {
          setNewAgeSeller(event.target.value);
          }}/>
         <button onClick={updateSeller(8)}>Editar</button>
         </div>
    </div>
 )
}