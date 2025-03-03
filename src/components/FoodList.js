import { Flex } from 'antd'
import FoodBox from './FoodBox'

export default function FoodList({ productsToShow, dataFoods, setDataFoods }) {



  return (
    <Flex 
      wrap 
      gap='large'
      justify='center'
      align='center'
      style={{ width: '80%' , height: '100vh' }}
    >
      {productsToShow.map(food => {
        return (
          <FoodBox 
            key={food.name}
            itemImg={food.image}
            itemName={food.name}
            itemCalories={food.calories}
            itemServings={food.servings}
            dataFoods={dataFoods}
            setDataFoods={setDataFoods}
          />
        )
      })}
      </Flex>
  )
}
