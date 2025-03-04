const { expect } = require('chai');
const addTask = require('../src/addTask'); // Ruta correcta a `addTask.js`

describe('Agregar Tarea', () => {
  it('debería agregar una nueva tarea a la lista', () => {
    const taskList = [];
    const newTask = 'Tarea de prueba';
    addTask(taskList, newTask);
    expect(taskList).to.include(newTask);
  });
});
