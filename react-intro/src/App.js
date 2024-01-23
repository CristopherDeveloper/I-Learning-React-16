import React from 'react';
import Title from './components/title';
import './App.css';
import image from './img/image.svg';
import FormButton from './components/formButton';
import Links from './components/links';
import TextFooter from './components/textFooter';


function App() {

  return (
    <>
      <img className='image' src={image}/>

      <main className='main'>
        <article>
          <Title/>
          <FormButton/>
        </article>
      </main>

      <footer>
        <article>
          <section>
            <Links/>
          </section>

          <section>
            <TextFooter/>
          </section>
        </article>
      </footer>
    </>
  );
}

export default App;
