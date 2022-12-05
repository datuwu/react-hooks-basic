const Todo = (props) => {
    //const todos = props.todos
    const { todos, title, deleteTodoData } = props

    const handleDelete = (id) => {
        deleteTodoData(id)
    }

    return (
        <div className='todos-container'>
            <div className="title">{title}</div>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <li className='todo-child' key={todo.id}>{todo.title}
                            &nbsp; &nbsp; <span onClick={() => deleteTodoData(todo.id)}>x</span></li>
                    </div>
                )
            })}
            <hr />
        </div>
    )
}

export default Todo;