// src/addTask.js
function addTask(taskList, newTask) {
    taskList.push(newTask);
  }
  
  // Exportar la función solo si `module` está definido (entorno de Node.js)
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = addTask;
  }
  