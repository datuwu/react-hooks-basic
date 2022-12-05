const Todo = (props) => {
    const todos = props.myData
    return (
        <div className='todos-container'>
            {todos.map(todo => {
                console.log(todo);
                return (
                    <li className='todo-child' key={todo.id}>{todo.title}</li>)
            })}

        </div>
    )
}

export default Todo;