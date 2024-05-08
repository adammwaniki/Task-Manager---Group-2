import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // add todo
        addTodo(value);
        // clear form after submission
        setValue('');
      };
      
      const url = 'http://localhost:3000/users';
const data = {
    // Include the data you want to send in the PATCH request
    // For example:
    // id: 1,
    // name: 'Updated Name'
};

fetch(url, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log('PATCH request successful:', data);
})
.catch(error => {
    console.error('There was a problem with the PATCH request:', error);
});

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder= "What's today's task?" />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}