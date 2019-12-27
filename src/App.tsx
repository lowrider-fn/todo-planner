import { Component, Vue } from 'vue-property-decorator';
import VCalendar from '@/components/calendar/Calendar';
import TodoList from '@/components/todo-list/TodoList';

import styles from './App.css?module';


@Component
export default class App extends Vue {

  private days: object [] = [];
  private currentDay:Date = new Date();

  private changeCurrentDay(date:Date){
    this.currentDay = date
  }

created(){
  const mm:number = this.currentDay.getMonth();
  const yyyy:number = this.currentDay.getFullYear();
  const mounthLength:number = 33 - new Date(yyyy, mm, 33).getDate()

  for(let i = 1; i <= mounthLength; i++){
    this.days.push({
      dates:new Date(yyyy, mm, i),
      todos:[]
    })
  }
}

  //  daysLengthFromCurrentMounth(){
    
  
  render() {
    return (
      <div id="app" class={styles.app}>
        <div class={styles.app__inner}>
          <VCalendar 
            currentDay={this.currentDay}
            on-change-date={this.changeCurrentDay}
            days={this.days}
            />
          {/* <TodoList /> */}
        </div>
      </div>
    )
  }
}
