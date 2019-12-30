import { Component, Prop, Vue,Emit } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';
import Input from '@/components/ui/input/Input';
import TodoItem from './components/TodoItem';

import styles from './TodoList.css?module';

interface Props {
  todos:any[]
}

@Component
export default class ToDoList extends VueComponent<Props> {
@Prop() private todos!: any[];

@Emit() public addTodo(e:string){
  return e
}

@Emit() private changeTodoChecked(e:object){
  return e
}

  render() {
    return (
      <div class={styles.todoList}>
        <h1 class={styles.todoList__title}>События</h1>
        <Input on-enter={ this.addTodo}
          placeholder='Добавить событие'
        />
        { 
          this.todos.map(todo => 
            <TodoItem 
              todo={todo}
              on-change-todo-checked={ this.changeTodoChecked }
            /> 
          )
        }
      </div>
    )
  }
}
