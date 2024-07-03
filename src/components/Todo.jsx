import './Todo.css';

function Todo({ title, onTodoDelete }) {
    return (
        <div className="todo">
        <p>{ title }</p>
        <span></span>
        <button onClick={onTodoDelete}>Delete</button>
      </div>
    )
}

export default Todo