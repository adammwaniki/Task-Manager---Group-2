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
            <div>

            </div>
        )
    })

    return 
}

export default HistoryPage;