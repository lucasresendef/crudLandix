import { All } from "../All";
import { Header } from "../Header";
import { Home } from "../Home";
import {Switch, Route} from 'react-router-dom';
import styles from './styles.module.scss'
import { Seller } from "../Seller";
import { Clients } from "../Clientes";
import { Modal } from "../Modal";
import { EditSeller } from "../EditSeller";
import { EditClient } from "../EditClient";


export function Dashboard(){
    return (
        <>
        <Header/>
        <div className={styles.container}>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/all" component={All}></Route>
                <Route path="/seller" component={Seller}></Route>
                <Route path="/clients" component={Clients}></Route>
                <Route path="/modal" component={Modal}></Route>
                <Route path="/editseller" component={EditSeller}></Route>
                <Route path="/editclient" component={EditClient}></Route>
            </Switch>
        </div>
        </>
    )
}