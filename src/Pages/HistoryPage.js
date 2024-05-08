import React, { useState } from 'react';

function HistoryPage({ task }) {

    const [completedTasks, setCompletedTasks] = useState([])

    function handleCompletedTasks() {
        const completedTaskList = completedTasks.filter((completedTask) => {completedTask.id !== clickedTask.id})
        setCompletedTasks([...completedTaskList, clickedTask])
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
                <thead>
                    <tr>
                        <th className='history table headings'>Time</th>
                        <th className='history table headings'>Name</th>
                        <th className='history table headings'>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {historyTaskList}
                </tbody>
            </table>
        </div>
    )
}

export default HistoryPage;