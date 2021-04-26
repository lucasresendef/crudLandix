import { createContext, useState, useContext } from "react";
import { api } from "../../services/api";

export const SellerContext = createContext();

export function SellerContextProvider({ children }) {
  //Estado para coletar o id do vendedor 

  //Estado para criar os vendedores
  const [nameSeller, setNameSeller] = useState("");
  const [price, setPrice] = useState("");
  const [ageSeller, setAgeSeller] = useState("");

  const [sellerList, setSellerList] = useState([]);

  //Estado para editar os vendedores
  const [newNameSeller, setNewNameSeller] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newAgeSeller, setNewAgeSeller] = useState("");

  //Estado para os clientes
  const [nameClient, setNameClient] = useState("");
  const [type, setType] = useState("");
  const [limit, setLimit] = useState(0);
  const [codeSeller, setCodeSeller] = useState(0);

  const [clientList, setClientList] = useState([]);

  //Estado para editar os Clients
  const [newNameClient, setNewNameClient] = useState("");
  const [newType, setNewType] = useState("");
  const [newLimit, setNewLimit] = useState("");
  const [newCodeSeller, setNewCodeSeller] = useState(0);


  

  //Função adiciona clientes ao banco de dados
  const addClient = () => {
    api
      .post("/createclient", {
        dsnome: nameClient,
        idtipo: type,
        cdvendedor: codeSeller,
        dslim: limit,
      })
      .then(() => {
        setClientList([
          ...sellerList,
          {
            dsnome: nameClient,
            idtipo: type,
            cdvendedor: codeSeller,
            dslim: limit,
          },
        ]);
        console.log("Added Client");
      });
  };

  //Funcão recebe os Clientes do banco de dados
  const getClient = () => {
    api.get("/client").then((res) => {
      setClientList(res.data);
      console.log("Success getClient");
    });
  };

  //Função deleta cada cliente do banco de dados
  const deleteClient = (id) => {
    api.delete(`/deleteclient/${id}`).then((response) => {
      setClientList(
        clientList.filter((val) => {
          return val.id !== id;
        })
      );
      console.log("Deleted Client");
    });
  };
  //Função que edita cada cliente
  const updateClient = (id) => {
    api
      .put("/updatecliente", {
        dsnome: newNameClient,
        idtipo: newType,
        cdvendedor: newCodeSeller,
        dslim: newLimit,
        cdcl: id,
      })
      .then((response) => {
        setSellerList(
          sellerList.map((val) => {
            return val.id === id
              ? {
                  cdcl: val.cdcl,
                  dsnome: newNameClient,
                  idtipo: newType,
                  cdvendedor: newCodeSeller,
                  dslim: newLimit,
                }
              : val;
          })
        );
      });
  };

  //Função adiciona vendedores ao banco de dados
  const addSeller = () => {
    api
      .post("/createseller", {
        dsnome: nameSeller,
        cdtab: price,
        dtnasc: ageSeller,
      })
      .then(() => {
        setSellerList([
          ...sellerList,
          {
            dsnome: nameSeller,
            cdtab: price,
            dtnasc: ageSeller,
          },
        ]);
        console.log("Added Seller");
      });
  };

  //Funcão recebe os Clientes do banco de dados
  const getSeller = () => {
    api.get("/seller").then((res) => {
      setSellerList(res.data);
      console.log("Success getSeller");
    });
  };

  //Função deleta cada vendedor do banco de dados
  const deleteSeller = (id) => {
    api.delete(`/deleteseller/${id}`).then((response) => {
      setSellerList(
        sellerList.filter((val) => {
          return val.id !== id;
        })
      );
      console.log("Deleted Seller");
    });
  };

  //Função que edita cada vendedor
  const updateSeller = (id) => {
    api
      .put("/updateseller", {
        dsnome: newNameSeller,
        cdtab: newPrice,
        dtnasc: newAgeSeller,
        cdvend: id,
      })
      .then((response) => {
        setSellerList(
          sellerList.map((val) => {
            return val.id === id
              ? {
                  cdvend: val.cdvend,
                  dsnome: newNameSeller,
                  cdtab: val.cdtab,
                  dtnasc: val.dtnasc,
                }
              : val;
          })
        );
      });
  };

  return (
    <SellerContext.Provider
      value={{
        //variavaveis e funçãos relacionado aos vendedores
        nameSeller,
        setNameSeller,
        price,
        setPrice,
        ageSeller,
        setAgeSeller,
        sellerList,
        setSellerList,
        addSeller,
        getSeller,
        deleteSeller,
        newNameSeller,
        setNewNameSeller,
        newPrice,
        setNewPrice,
        newAgeSeller,
        setNewAgeSeller,
        updateSeller,

        //variavaveis e funçãos relacionado aos clientes
        nameClient,
        setNameClient,
        type,
        setType,
        limit,
        setLimit,
        clientList,
        setClientList,
        codeSeller,
        setCodeSeller,
        addClient,
        getClient,
        deleteClient,
        newNameClient, 
        setNewNameClient,
        newType, setNewType,
        newLimit, setNewLimit,
        newCodeSeller, setNewCodeSeller,
        updateClient,

      }}
    >
      {children}
    </SellerContext.Provider>
  );
}

export const useSeller = () => {
  return useContext(SellerContext);
};
