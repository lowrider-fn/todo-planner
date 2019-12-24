import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';
import Checkbox from '@/components/ui/checkbox/Checkbox'

import styles from './TodoItem.css?module'

// interface Props {
//   msg: string
// }

@Component
export default class ToDoItem extends VueComponent {
  // @Prop()
  // private msg!: string;
  render() {
    return (
      <div class={styles['todo-item']}>
        {/* <Checkbox /> */}
          <p class={styles['todo-item__text']}></p>
      </div>
    )
  }
}
