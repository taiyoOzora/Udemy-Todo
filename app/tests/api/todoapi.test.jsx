import expect from 'expect';
import TodoAPI from 'TodoAPI';

describe('TodoAPI', () =>{
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });

  it('should exist', () =>{
    expect(TodoAPI).toExist();
  });

  describe('setTodos', ()=>{
    it('should set valid todos array', () =>{
      var todos =[
        {id: 23, text: "Test All files", completed: false}
      ];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', ()=>{
      var badtoDos = {a:'b'};
      TodoAPI.setTodos(badtoDos);

      expect(localStorage.getItem('todos')).toBe(null);
    })
  });

  describe('getTodos', ()=>{
    it('should return empty array for bad localStorage data', ()=>{
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localStorage', ()=>{
      var todos =[
        {id: 23, text: "Test All files", completed: false}
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });
});