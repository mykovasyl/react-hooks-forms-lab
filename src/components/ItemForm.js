import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  
  const [itemCategory, setCategory] = useState('Produce')
  const [inputName, setInputName] = useState('')

  function handleCategoryChange(e) {
    setCategory(e.target.value)
  }

  function handleInputChange(e) {
    setInputName(e.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: inputName,
      category: itemCategory
    }
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={inputName} onChange={handleInputChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
