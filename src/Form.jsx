import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Items from './Items';

export const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('submitted');
    // console.log(newItemName);
    if (!newItemName) {
      toast.error('please enter value');
      return;
    }
    addItem(newItemName);
    // console.log(newItemName);
    setNewItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer
        position={'top-center'}
        autoClose={1000}
        Transition={'zoom'}
        theme='light'
      />
      <h4>grocery bud</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  );
};
