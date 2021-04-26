import { Link } from 'react-router-dom';
import { useSeller } from '../contexts/sellerContext'
import styles from './styles.module.scss'


export function Home(){

  const {sellerList, 
    deleteSeller,} = useSeller();

 

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1>Home</h1>
            <h2>Vendedores</h2>
        </div>

        <div className={styles.tables}>
        <table>
         <thead>
           <tr>
           <th>Código</th>
           <th>Nome</th>
           <th>Cod. Tabela Preço</th>
           <th>Data de Nascimento</th>
           <th>Editar</th>
           <th>Deletar</th>
           </tr>
         </thead>
         <tbody>
           {sellerList.map((value) => {
             return(
              <tr key={value.cdvend}>
                 <td>{value.cdvend}</td>
                 <td>{value.dsnome}</td>
                 <td>{value.cdtab}</td>
                 <td>{value.dtnasc}</td>
                 <td>
                 <Link to="/editseller">
                   <button type='button'>
                       Editar Vendedor
                   </button>
                  </Link>
                 </td>
                 <td>
                   <button type='button' onClick={() => {
                    deleteSeller(value.cdvend);
                  }}>
                       Deletar Vendedor
                   </button>
                 </td>
               </tr>
             )
           })}  
         </tbody>
       </table>
        </div>
    </div>
 )
}