import React, { useState } from 'react';

function HistoryPage({ task }) {

    const [completedTasks, setCompletedTasks] = useState([])

    function handleCompletedTasks() {
        const completedTaskList = completedTasks.filter((completedTask) => {completedTask.id !== clickedTask.id})
        setCompletedTasks([...completedTasks, clickedTask])
        console.log(clickedTask)
    }

    const historyTaskList = completedTasks.map((completedTask) => {
        return (
            <tr key={completedTask.id}>
                <td>{completedTask.time}</td>
                <td>{completedTask.name}</td>
                <td>{completedTask.description}</td>
            </tr>
        )
    })

    return (
        <div>
            <table className='history table'>
                <tr>
                    <th>
                        <h3 className='history table headings'>Time</h3>
                    </th>
                    <th>
                        <h3 className='history table headings'>Name</h3>
                    </th>
                    <th>
                        <h3 className='history table headings'>Description</h3>
                    </th>
                </tr>
                {historyTaskList}
            </table>
        </div>
    )
}

export default HistoryPage;