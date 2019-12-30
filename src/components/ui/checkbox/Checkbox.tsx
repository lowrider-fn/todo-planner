import { Component, Prop, Emit } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';

import styles from './Checkbox.css?module'

interface Props {
  isChecked: boolean,
}

@Component
export default class Checkbox extends VueComponent<Props> {

  @Prop() private isChecked!: boolean;

  @Emit() private change(e:any) {
    return e.target.checked
  }

  render() {
    return (
      <div class={styles.checkbox}>
        <span class={styles.checkbox__wrap}>
            <input class={styles.checkbox__inp} type="checkbox"
                   checked={this.isChecked} 
                   onInput={this.change}
            />
            <span class={styles['checkbox__icon-wrap']}>
                <svg class={styles.checkbox__icon} viewBox="0 0 18 14" id="icon-checkbox" fill="currentColor" width="100%" height="100%">
                    <path d="M1 7.567l4.666 4.755L16.76 1" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" />
                </svg>
            </span>
        </span>
      </div>
    )
  }
}
