import React from 'react'
import '../src/scss/main.scss'
import { Home, About, Brand } from './pages'




function App() {



  return (

    <div className='all-screens'>
      <Home />
      <About />
      <Brand
        popupAtributes={[
          'Cамое важное и ключевое преимущество нашего препарата',
          'Второе по важности преимущество',
          'Еще одно важное преимущество препарата',
          'Еще одно не менее важное преимущество препарата',
          'Еще одно важное преимущество препарата',
          'Еще одно важное преимущество препарата',
          'Еще одно важное преимущество препарата'
        ]}
      />
    </div>



  );
}

export default App;
