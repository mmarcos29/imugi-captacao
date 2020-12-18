import React, { useState, useEffect } from 'react';
import "./Form.css";
import firebase from "../../services/firebaseUtils";

export const Form = () => {
  const [alunos, setAlunos] = useState([]);
  const [form, setForm] = useState({nome:"", CIDADE:"", idade:"", TELEFONE1:"", TELEFONE2:""});
  const data = new Date;


  const getAlunos = () => {
    const db = firebase.firestore();    
    let atual = [];
    const alunosRef = db
      .collection("alunos")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          atual.push(doc.data());
          setAlunos(atual)
        });
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
    };

    
  useEffect(() => {
    getAlunos();
  }, []);
  
  const onChange = (e) => { 
    setForm({...form, [e.target.name]:e.target.value})
  };

  const gravar = async (e) =>{
    console.log("gravou")
    const db = firebase.firestore();  
    const cliente = await db.collection('alunos').add({
      nome: form.nome, 
      CIDADE: form.CIDADE, 
      idade: form.idade, 
      TELEFONE1: form.TELEFONE1, 
      TELEFONE2: form.TELEFONE2,
      data: new Date
    }).then(alert("dados gravados com sucesso!"), window.location.replace("https://site.imugi.com.br/site/depoimentos") )
    console.log(cliente.id)
  }

  return (
    <div className="Form">
      <div>
        <p>Mini curso de Photoshop</p>
        <p> 4 aulas gratuitas </p>
        <input type="text" name="nome" placeholder="NOME" onChange={onChange} value={form.nome} />
        <input type="text" name="CIDADE" placeholder="CIDADE" onChange={onChange} value={form.CIDADE}/>
        <select name="idade" placeholder="IDADE" onChange={onChange} value={form.idade} >
          <option value="" hidden selected>Informe sua Idade</option>
          <option value="-12">Menos de 12 anos</option>
          <option value="13">13 anos</option>
          <option value="14">14 anos</option>
          <option value="15">15 anos</option>
          <option value="16">16 anos</option>
          <option value="17">17 anos</option>
          <option value="18">18 anos</option>
          <option value="19">19 anos</option>
          <option value="20">20 anos</option>
          <option value="21">21 anos</option>
          <option value="22">22 anos</option>
          <option value="33">23 anos</option>
          <option value="24">24 anos</option>
          <option value="+24">Maior de 24 anos</option>
        </select>
        <input type="text" name="TELEFONE1" placeholder="TELEFONE 1" onChange={onChange} value={form.TELEFONE1}/>
        <input type="text" name="TELEFONE2" placeholder="TELEFONE 2" onChange={onChange} value={form.TELEFONE2}/>
        <div className="espaceButton">
          <button onClick={gravar}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
};
