import { useSeller } from '../contexts/sellerContext';
import styles from './styles.module.scss'

export function Seller(){

  const { 
    setNameSeller,
    setPrice,
    setAgeSeller,
    addSeller 
  } = useSeller()
    
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1>Criar</h1>
            <h2>Vendedores</h2>
        </div>

        <div className={styles.input}>
         <label>Nome do vendedor:</label>
         <input type='text' 
          onChange={(event) => {
          setNameSeller(event.target.value);
          }}/>
         <label>Cod. Tabela Preço:</label>
         <input type='number' 
          onChange={(event) => {
          setPrice(event.target.value);
          }}/>
         <label>Data de nascimento:</label>
         <input type='date' 
         onChange={(event) => {
          setAgeSeller(event.target.value);
          }}/>
         <button onClick={addSeller}>Criar</button>
        </div>
    </div>
 )
}