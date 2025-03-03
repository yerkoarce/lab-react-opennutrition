import { Card, Button } from "antd"

export default function FoodBox({ 
  itemImg, 
  itemName, 
  itemCalories, 
  itemServings,
  dataFoods,
  setDataFoods
 }){

  const handleDeleteBtn = () => {
    const newFoods = dataFoods.filter(food => food.name !== itemName)
    setDataFoods(newFoods)
  }

  return (
    <Card title={itemName} style={{ width: 230}} >
      <img style={{ width: 200 }} src={itemImg} alt={itemName} />
      <p>Calories: {itemCalories}</p>
      <p>Servings: {itemServings}</p>
      <p><strong>Total Calories:</strong> {itemCalories * itemServings}</p>
      <Button type="primary" onClick={handleDeleteBtn}> Delete </Button>
    </Card>
  )
}
