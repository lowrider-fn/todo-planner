import Input from '@/components/ui/input/Input';
import { VueComponent } from '@/shims-vue';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import TodoItem from './components/TodoItem';

import styles from './todoList.scss?module';

interface Props {
  todos: any[];
}

@Component
export default class ToDoList extends VueComponent<Props> {
  @Prop() private todos!: any[];

  @Emit() public addTodo(e: string) {
    return e;
  }

  public render() {
      return (
        <div class={styles.todoList}>
          <h1 class={styles.todoList__title}>События</h1>
          <Input on-enter={ this.addTodo}
            placeholder='Добавить событие'
          />
          {
            this.todos.map((todo) =>
              <TodoItem
                todo={todo}
                on-change-todo-checked={ this.changeTodoChecked }
              />,
            )
          }
        </div>
      );
    }

  @Emit() private changeTodoChecked(e: object) {
    return e;
  }
}
