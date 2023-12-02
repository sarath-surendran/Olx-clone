import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContextProvider } from '../../store/FirebaseProvider';
import {useHistory} from 'react-router-dom'

const Create = () => {
const {firebase} = useContext(FirebaseContextProvider)
const {user} = useContext(AuthContext)
const [name, setName] =  useState('')
const [category, setCategory] =  useState('')
const [price, setPrice] =  useState('')
const [image, setImage] =  useState('')
const date = new Date() // Gives the current date.
const histroy = useHistory()

const handleSubmit = ()=>{
  firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
    ref.getDownloadURL().then((url)=>{
      console.log(url);
      firebase.firestore().collection('products').add({
        name,//similar to - name:name,
        category, // similart to - category:category,
        price, //price:price,
        url,
        userID:user.uid,
        createdAt:date.toDateString()
      })
      histroy.push('/')
    })
  })
}

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
              onChange={(e)=>{setCategory(e.target.value)}}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" value={price} onChange={(e)=>{setPrice(e.target.value)}} name="Price" />
            <br />
          
          <br />
          <img alt="Select an Image" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
         
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">Upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
