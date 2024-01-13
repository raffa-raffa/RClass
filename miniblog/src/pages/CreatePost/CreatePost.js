import React from 'react'
import styles from './CreatePost.module.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuthValue} from '../../context/AuthContext'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useInsertDocument } from '../../hooks/useInsertDocument'


const CreatePost = () => {
  const { user } = useAuthValue();
  
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormEror] = useState("");
  const [insertDocument, response] = useInsertDocument("posts");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormEror("");

    try{
    newURL(image)}catch(error){
    setFormError("A imagem precisa ser uma URL")}

    const tagsArray = tags.split(",").map((tag)=> tag.trim().toLocaleLowerCase())
    if(!title || !image || !tags || !body){
    setFormEror("Por favor, preencha todos os campos!")}

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });
  };


  return (
    <div className={styles.createpost}>
        <h2>Novo Post</h2>
        <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
        <form onSubmit={handleSubmit}>
          <label> <span>Título:</span>
          <input 
          type="text" 
          name='title' 
          required 
          placeholder='Pense num bom título' 
          onChange={(e)=> setTitle(e.target.value)} 
          value={title}/>
          </label>
          <label> <span>Conteúdo:</span>
         <textarea 
         name="body" 
         required 
         placeholder="Insira o conteúdo do post" 
         onChange={(e)=> setBody(e.target.value)}
         value={body}>
         </textarea>
          </label>
          <label> <span>Url da imagem:</span>
          <input 
          type="text" 
          name='image' 
          required 
          placeholder='Insira uma imagem sobre o seu post' 
          onChange={(e)=> setImage(e.target.value)} 
          value={image}/>
          </label>
          <label> <span>Tags:</span>
          <input 
          type="text" 
          name='tags' 
          required 
          placeholder='Insira tags sobre o seu post' 
          onChange={(e)=> setTags(e.target.value)} 
          value={tags}/>
          </label>
          {!response.loading && <button className="btn">Criar post!</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde.. .
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
        </form>
    </div>
  )
}

export default CreatePost