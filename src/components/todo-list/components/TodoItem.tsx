import Checkbox from '@/components/ui/checkbox/Checkbox';
import { VueComponent } from '@/shims-vue';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import styles from './TodoItem.css?module';

interface Props {
  todo: any;
}

@Component
export default class ToDoItem extends VueComponent<Props> {

  @Prop() private todo!: any;

  public render() {
    return (
      <div class={this.setClass()}>
        <Checkbox isChecked={this.todo.isChecked}
          on-change={this.changeTodoChecked}
          />
          <p class={styles.todoItem__text}>
            {this.todo.text}{this.todo.isChecked}
          </p>
      </div>
    );
  }

  @Emit() private changeTodoChecked(isChecked: boolean) {
    return {
      id: this.todo.id,
      isChecked,
    };
  }

  private setClass() {
    return `${styles.todoItem} ${this.todo.isChecked && styles.checked}`;
  }
}
