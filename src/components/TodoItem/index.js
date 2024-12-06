// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {id, title} = todoDetails
  console.log(id)

  const onClickChange = () => deleteUser(id)

  return (
    <li className="items">
      <p className="title-section">{title}</p>
      <button className="delete-btn" onClick={onClickChange}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
