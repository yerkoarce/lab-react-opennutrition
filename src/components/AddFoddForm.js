import { Input, Button, Form } from 'antd'

export default function AddFoddForm({ addNewFood, handleDisplayForm }) {

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const newFood = {
      name: values.Name,
      calories: values.Calories,
      image: values.Image,
      servings: values.Servings
    }
    addNewFood(newFood)
    form.resetFields()
  }

  return (
    <div>
      <h1>Add new food</h1>
      <Form
        name="wrap"
        labelCol={{ flex: '100px' }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit}
        form={form}
      >
        <Form.Item label="Name" name="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Calories" name="Calories" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Image" name="Image" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Servings" name="Servings" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item style={{ display: 'inline-block' }} label=" ">
          <Button style={{ display: 'inline-block' }} type="primary" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
        <Form.Item label=" " style={{ display: 'inline-block' }}>
          <Button style={{ display: 'inline-block' }} type="default" htmlType="button" onClick={handleDisplayForm}>
            Hide Form
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
