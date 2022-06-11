import Receipt from './components/Receipt';
import './App.css';
import Form from './components/Form';
import receiptData from './recieptData';
import { useState } from 'react';

function App() {
  const [receipt, setReceipt] = useState(receiptData);


  const receipts = receipt.map((elem,index) => {
    return <Receipt key={index} data={elem}/>
  });


  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <Form/>
      <div className='receipts-container'>
      {receipts}
      </div>
    </div>
  );
}

export default App;
