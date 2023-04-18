import { useLocalStorage } from 'react-use';
import { useState } from 'react';


function useGlobalContextProvider() {
  const [itens, setItens] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentImage, setCurrentImage] = useState();
  const [nome, setNome ]= useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cpf, setCpf] = useState('');
  const [users, setUsers] = useState([]);
  const [openAdd, setOpenAdd] = useState('');
  const [openDelete, setOpenDelete] = useState('');
  const [currentUser, setCurrentUser] = useState('');
 
  return {
    itens, 
    setItens,
    currentPage, 
    setCurrentPage,
    currentImage, 
    setCurrentImage,
    nome, 
    setNome,
    email, 
    setEmail,
    telefone, 
    setTelefone,
    endereco, 
    setEndereco,
    cpf, 
    setCpf,
    users, 
    setUsers,
    openAdd, 
    setOpenAdd,
    openDelete, 
    setOpenDelete,
    currentUser, 
    setCurrentUser
  };
}

export default useGlobalContextProvider;