import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useSeller } from "../contexts/sellerContext";

export function Header() {

  const { getSeller, getClient} = useSeller();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>CRUD</div>
      <div className={styles.buttons}>
        <Link to="/home">
          <button onClick={getSeller} type="button">Vendedores</button>
        </Link>
        <Link to="/all">
          <button type="button" onClick={()=> {getSeller(); getClient()}}>Todos</button>
        </Link>
        <Link to="/seller">
          <button type="button">Criar Vendedores</button>
        </Link>
        <Link to="/clients">
          <button type="button">Criar Clientes</button>
        </Link>
      </div>
      <div className={styles.footer}>
        <p>Feito por Lucas Resende</p>
        <p>Teste para Landix</p>
        </div>
    </div>
  );
}
