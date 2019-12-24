import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';
import { setupCalendar, Calendar } from 'v-calendar'

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
  currentDay: Date
}

@Component 
export default class VCalendar extends VueComponent<Props> {
  @Prop()
  private currentDay!: Date;

  private defaultTodo:object = {
    id:'',
    text:'', 
    isPerformed:false
  };

  private currentTodo:object={}

  private defaultAttr:object={
    dates: new Date(),
    highlight: true,
    todos:[]
  };

  private attributes:object= [
    {
      dates: new Date(),
      todos:[]
    },
    {
      dates: new Date(2019,11,23),
      todos:[]
    },
  ];
  public get setHighlightsProperty(){
    const attrs:any = this.attributes
     attrs.forEach(attr=>{

      attr.highlight = attr.todos.length > 0;
      attr.bar = this.dateSUbstr(this.currentDay) === this.dateSUbstr(attr.dates);
    })
    return attrs
  }

  @Emit()
  private dateSUbstr(date:Date){
    return date.toString().substr(0,15)
  }

  private dayHandler(e:any){e.isFocusable=false
    console.log(e);
    
    this.$emit('changeDate', this.dateSUbstr(e.date))
  }
  
  public render() {
    return (
      <div class={styles.calendar}>
        <Calendar
          attributes={this.setHighlightsProperty}
          onDayclick={this.dayHandler}
          v-model={this.currentDay}
          />
      </div>
    )
  }
}
