import { Component, Vue,Emit } from 'vue-property-decorator';
import VCalendar from '@/components/calendar/Calendar';
import TodoList from '@/components/todo-list/TodoList';

import styles from './App.css?module';


@Component
export default class App extends Vue {
  
  public currentDay:Date = new Date()

  private changeCurrentDay(date:Date){
    this.currentDay = date
  }

  render() {
    return (
      <div id="app" class={styles.app}>
        <div class={styles.app__inner}>
          <VCalendar 
            currentDay={this.currentDay}
            on-change-date={this.changeCurrentDay}
            />
          {/* <TodoList /> */}
        </div>
      </div>
    )
  }
}
