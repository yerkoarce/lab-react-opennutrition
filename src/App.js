import foods from './foods.json'
import { useEffect, useMemo, useState } from 'react';
import { Button } from 'antd'
import { WarningOutlined } from '@ant-design/icons';
import AddFoddForm from './components/AddFoddForm';
import Search from './components/Search';
import FoodList from './components/FoodList';

function App() {

  const [dataFoods, setDataFoods] = useState([])
  const [filterText, setFilterText] = useState('')
  const [displayForm, setDisplayForm] = useState(false)
  const [visibleBtn, setVisibleBtn] = useState(true)


  useEffect(() => {
    setDataFoods(foods)
  }, [])

  const productsToShow = useMemo(() => {
    const products = dataFoods.filter(food => 
      food.name.toLowerCase().includes(filterText.toLowerCase())
    )
    return products
  }, [dataFoods, filterText])

  const addNewFood = (newFood) => {
    setDataFoods([...dataFoods, newFood])
  }

  const handleDisplayForm = () => {
    setDisplayForm(!displayForm)
    setVisibleBtn(!visibleBtn)
  }

  return (
    <div className="App">
      {visibleBtn ? <Button 
        type='default' 
        onClick={handleDisplayForm}
        style={{ margin: '20px' }}
      >Add New Food</Button> : null}
      {displayForm ? 
      <AddFoddForm 
        addNewFood={addNewFood} 
        handleDisplayForm={handleDisplayForm}
      /> : null}
      <Search 
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <h1>Food list</h1>
      <FoodList 
        productsToShow={productsToShow}
        dataFoods={dataFoods}
        setDataFoods={setDataFoods}
      />
      {dataFoods.length === 0 ? <><h3>Ooops, there is no more content to show.</h3><WarningOutlined style={{ color: 'red' , fontSize: '300px'}}/></> : null}
      
    </div>
  );
}

export default App;
