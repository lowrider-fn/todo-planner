import { Component,Emit, Prop } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';

import styles from './Input.css?module'

interface Props {
  placeholder: string,
}

@Component
export default class Input extends VueComponent<Props> {
  @Prop() private placeholder!: string;

  private task:string = ''
  
  private keyDownHandler(e:KeyboardEvent){
    const enter:string = 'Enter';
    const isFull:boolean = this.task.trim().length > 0;

    if(e.key === enter && isFull){
      this.enter();
      this.task=''
    }
  }

  @Emit() private enter() {
    return this.task
  }

  render() {
    return (
      <input 
        class={styles.input}
        type="text" 
        placeholder={this.placeholder} 
        v-model={this.task}
        onKeydown={this.keyDownHandler}
      />
    )
  }
}
