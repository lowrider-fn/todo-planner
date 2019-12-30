import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';
import { setupCalendar, DatePicker } from 'v-calendar'

import  './v-calendar.css'
import styles from './Calendar.css?module';

setupCalendar({
  titlePosition:'left',
  firstDayOfWeek: 2 ,
  navVisibility:'hidden',
  masks:{
    title: 'MMMM YYYY',
    weekdays: 'WW',
    data: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
  },
})
interface Props {
  currentDay: Date;
  days:any[]
}

@Component 
export default class VCalendar extends VueComponent<Props> {
  @Prop() private currentDay!: Date;
  @Prop() private days!:[];

  @Emit() private changeDate(e:any){
    return e.date
  }

  private get setHighlightsProperty(){
     this.days.forEach((attr:any, i:number)=> {
      attr.key = i
      attr.highlight = attr.todos.length > 0;
      attr.bar = this.dateSUbstr(this.currentDay) === this.dateSUbstr(attr.dates) 
    })
    return this.days
  }


  private dateSUbstr(date:Date){
    return date.toString().substr(0,15)
  }
  
  public render() {
    return (
      <div class={styles.calendar}>
        <DatePicker 
          attributes={this.setHighlightsProperty}
          onDayclick={this.changeDate}
          isInline={true}
          value={this.currentDay}
          />
      </div>
    )
  }
}
