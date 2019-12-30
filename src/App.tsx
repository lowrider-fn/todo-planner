import { Component, Vue } from 'vue-property-decorator';
import VCalendar from '@/components/calendar/Calendar';
import TodoList from '@/components/todo-list/TodoList';

import styles from './App.css?module';


@Component
export default class App extends Vue {
  
  private changeCurrentDay(date:Date){
    this.$store.commit('Todo/CHANGE_TODO_CHECKED',date)
  }

  private addTodo(todoVal:string){
    this.$store.commit('Todo/ADD_TODO',todoVal)
  }

  private changeTodoChecked(e:any){
    this.$store.commit('Todo/CHANGE_TODO_CHECKED',e)
  }

  render() {
    return (
      <div id="app" class={styles.app}>
        <div class={styles.app__inner}>
          <VCalendar 
            currentDay={this.$store.state.Todo.currentDay}
            on-change-date={this.changeCurrentDay}
            days={this.$store.state.Todo.days}
            />
          <TodoList
           todos={this.$store.getters['Todo/TODOS']}
           on-add-todo={this.addTodo}
           on-change-todo-checked={this.changeTodoChecked}
           />
        </div>
      </div>
    )
  }
}
