import { Input } from 'antd'

export default function Search({ filterText, setFilterText }) {

  const handlerFilterTextChange = (e) => {
    setFilterText(e.target.value)
  }

  return (
    <div>
      <h1>Search</h1>
      <Input
        placeholder="Search..." 
        size='large'
        value={filterText}
        onChange={handlerFilterTextChange}
      />
    </div>
  )
}
