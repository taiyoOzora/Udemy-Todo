import $ from 'jquery';

module.exports ={
  filterTodos(todos, showCompleted, searchText){
    var filteredTodos = todos;

    //Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) =>{
      return !todo.completed || showCompleted;
    })

    //filter by searchText
    filteredTodos = filteredTodos.filter((todo) =>{
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText.toLowerCase()) >= 0;
    })

    //Sort Todos with non-completed first
    filteredTodos.sort((a, b)=>{
      if (!a.completed && b.completed){
        return -1;
      }else if(a.completed && !b.completed){
        return 1;
      }else{
        return 0
      }
    });

    return filteredTodos;
  }
}
