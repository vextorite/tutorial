import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Book from './Book';


const books = [
  {
    id: 1,
    title: 'Spare',
    author: 'Prince Harry The Duke of Sussex',
    img: 'https://m.media-amazon.com/images/I/41CSAHVHk+L._SX327_BO1,204,203,200_.jpg'
  },
  {
    id: 2,
    title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear',
    img: 'https://m.media-amazon.com/images/I/513RN9tL-AL._SX329_BO1,204,203,200_.jpg'
  }
];

const booklist = books.map((book)=>{
  return <Book title={book.title} author={book.author} img={book.img} key={book.id}/>
});

const EventExamples = () =>{
  const handleFormInput = (e)=>{
    // console.log(e.target.name);
    // console.log(e.target.value)
  };
  const handleButtonClick = ()=>{
    // alert('lah!')
  };
  const handleFormSubmission = (e)=>{
    e.preventDefault();
    console.log('sub');
  }
  return <section>
    <form onSubmit={handleFormSubmission}>
      <h2>Form</h2>
      <input type='text' name='example' onChange={handleFormInput} style={{margin: '1rem 0'}}>

      </input>
      <button type='submit' onClick={handleFormSubmission}>Click</button>

    </form>
  </section>
};

const Booklist = () =>{

  return( 
    <section className='booklist'>
      <EventExamples/>
      {booklist}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Booklist/>
  </React.StrictMode>
);

