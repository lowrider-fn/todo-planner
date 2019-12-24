import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';
import Input from '@/components/ui/input/Input';
import TodoItem from './components/TodoItem';

import styles from './TodoList.css?module';

interface Props {
  todos:object
}

@Component
export default class ToDoList extends VueComponent<Props> {
  @Prop()
  private todos!: object;

  render() {
    return (
      <div class={styles['todo-list']}>
          <h1 class={styles['todo-list__title']}>События</h1>
          <Input placeholder='Добавить событие'/>
          {/* <TodoItem v-for={todo in this.todos}/> */}
      </div>
    )
  }
}
