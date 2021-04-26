import { useState } from "react";
import { Link } from "react-router-dom";
import { useSeller } from "../contexts/sellerContext";
import styles from "./styles.module.scss";

export function All() {
  const { sellerList, clientList, deleteSeller, deleteClient } = useSeller();

  const [teste, setTeste] = useState(0);
  
  function vaidarcerto(id){
    setTeste(id)
    console.log(teste)
    return;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Todos</h1>
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
              <th>Todos os Clientes</th>
              <th>Clientes</th>
              <th>Editar</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {sellerList.map((value) => {
              return (
                <tr key={value.cdvend}>
                  <td>{value.cdvend}</td>
                  <td>{value.dsnome}</td>
                  <td>{value.cdtab}</td>
                  <td>{value.dtnasc}</td>
                  <td>
                  <Link to="modal">
                    <button type="button">Mostrar todos</button>
                  </Link>
                  </td>
                  <td>
                    <button type="button" onClick={() => {vaidarcerto(value.cdvend)}}>Mostrar Clientes</button>
                  </td>
                  <td>
                  <Link to="/editClient">
                   <button type='button'>
                       Editar Vendedor
                   </button>
                  </Link>
                  </td>
                  
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        deleteSeller(value.cdvend);
                      }}
                    >
                      Deletar Vendedor
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.header}>
        <Link to="modal">
        <h2>Clientes</h2>
        </Link>
      </div>
      <div className={styles.tables2}>
      <table>
          <thead>
            <tr>
              <th>Código do cliente</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Código do vendedor</th>
              <th>Limite de Crédito</th>
              <th>Editar</th>
              <th>Deletar</th>
            </tr>
          </thead>
        
          {clientList.map((value) => {
              return  value.cdvendedor == teste ?
              (
                <tbody>
                <tr key={value.cdcl}>
                  <td>{value.cdcl}</td>
                  <td>{value.dsnome}</td>
                  <td>{value.idtipo}</td>
                  <td>{value.cdvendedor}</td>
                  <td>R$ {value.dslim}</td>
                  <td>
                  <Link to="editclient">
                    <button type="button">Editar Cliente</button>
                  </Link>
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
                
              ) : ""
              
            })}
          
            </table>
      </div>
    </div>
  );
}
