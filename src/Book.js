import React from 'react'
import './index.css'

const Book = (props) => {
  return (
    <article className='book'>
        <Image img={props.img} title={props.title}/>
        <Title title={props.title}/>
        <Author author={props.author}/>
        
    </article>
  )
}

function Author(props){
    return <h4>{props.author}</h4>;
}

function Title(props){
    return <h2>{props.title}</h2>;
}

function Image(props){
    return <img src={props.img} alt={props.title}></img>

}

export default Book