import { useState } from 'react';
import { Form } from './Form';
import { nanoid } from 'nanoid';
import 'react-toastify/dist/ReactToastify.css';
import Items from './Items';
import { ToastContainer, toast } from 'react-toastify';

// const getLocalStorage = () => {
//   return JSON.parse(localStorage.getItem('grocery')) || [];
// };

// const getLocalStorage = () => {
//   let list = localStorage.getItem('grocery');
//   if (list) {
//     list = JSON.parse(localStorage.getItem('grocery'));
//   } else {
//     list = [];
//   }
//   return list;
// };

const defaultList = JSON.parse(localStorage.getItem('grocery') || '[]');

const setLocalStorage = (items) => {
  localStorage.setItem('grocery', JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added');
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => itemId !== item.id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item deleted');
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    toast.warn('item edited');
  };

  return (
    <section className='section-center'>
      <ToastContainer
        position={'top-center'}
        autoClose={1000}
        Transition={'zoom'}
        theme='light'
      />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
