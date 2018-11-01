import React from 'react'
//import IconButton from 'views/template/iconButton'
import Button from "components/CustomButtons/Button.jsx";

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <Button color="primary" hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}></Button>
                    <Button color="primary" hide={!todo.done} 
                        onClick={() => props.handleMarkAsPending(todo)}></Button>
                    <Button color="primary" hide={!todo.done} 
                        onClick={() => props.handleRemove(todo)}></Button>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Tarefas</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}