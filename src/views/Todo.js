const Todo = (props) => {
    //const todos = props.todos
    const { todos, title, deleteTodoData, handleOnChangeInput, handleEventClick, address } = props

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
            <input type={'text'} value={address} onChange={(event) => { handleOnChangeInput(event) }} />
            <button onClick={(event) => { handleEventClick(event) }}>Click me</button>
        </div>
    )
}

export default Todo;