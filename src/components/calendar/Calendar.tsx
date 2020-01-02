import { VueComponent } from '@/shims-vue';
import { DatePicker, setupCalendar } from 'v-calendar';
import { Component, Emit, Prop } from 'vue-property-decorator';

import styles from './calendar.scss?module';
import  './v-calendar.scss';

setupCalendar({
  titlePosition: 'left',
  firstDayOfWeek: 2 ,
  navVisibility: 'hidden',
  masks: {
    title: 'MMMM YYYY',
    weekdays: 'WW',
    data: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
  },
});
interface Props {
  currentDay: Date;
  days: any[];
}

@Component
export default class VCalendar extends VueComponent<Props> {

  private get setHighlightsProperty() {
    return this.days.map((day: any, i: number) => ({
      dates: day.dates,
      key    : i,
      bar : this.currentDay.getDate() === day.dates.getDate(),
      content: day.todos.length > 0 && !day.todos.every((todo: any) => todo.isChecked) && 'vc-has-load',
    }));

  }

  @Prop() private currentDay!: Date;
  @Prop() private days!: [];

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
    );
  }

  @Emit() private changeDate(e: any) {
    return e.date;
  }
}
