import { Mutation, State, Getter } from 'vuex-simple';
 
export class Todo {
  @State()  public currentDay:Date = new Date();

  @State() public days: any[] = [];

  constructor() {
    const mm:number = this.currentDay.getMonth();
    const yyyy:number = this.currentDay.getFullYear();
    const mounthLength:number = 33 - new Date(yyyy, mm, 33).getDate()

    for(let i = 1; i <= mounthLength; i++){
      this.days.push({
        id: this.generateUid(),
        dates:new Date(yyyy, mm, i),
        todos:[]
      })
    }
  }

  private generateUid() {
    return `_${Math.random().toString(36).substr(2, 15)}`;
  }

  private get currentDayObj(){
    return this.days.find((day:any) => day.dates.getDate() ===this.currentDay.getDate())
  }

  @Mutation() public CHANGE_CURRENT_DAY(day:Date) {
    this.currentDay = day
  }
 
  @Mutation() public CHANGE_TODO_CHECKED(e:any){
    this.currentDayObj.todos.forEach((todo:any)=> todo.id === e.id && (todo.isChecked = e.isChecked))
  }
 
  @Mutation() public ADD_TODO(todoVal:string){
    const newTodo:object = { 
        id: this.generateUid(),
        text:todoVal, 
        isChecked:false
      }
    this.currentDayObj.todos.push(newTodo)
  }

  @Getter() public get TODOS(){
    return this.currentDayObj.todos
  }

  @Getter() public get DAYS(){
    return this.days
  }
}