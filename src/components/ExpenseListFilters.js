import React from 'react';
import {connect} from 'react-redux';
import { filterText, sortByDate, sortByAmount, setStartDate, setEndDate } from '../action/expenses';
import {DateRangePicker } from 'react-dates'

 class ExpenseFilterText extends React.Component {
      
      state = {
          calendarFocused:null
      }

          onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

     render(){
         return (
            <div>
            <input type='text' value={this.props.filter.text}
            onChange={ (e) => {
                this.props.dispatch(filterText({text: e.target.value}))  }
            } /> <select 
            onChange = {(e)=>{
                if (e.target.value === 'date') {
                    this.props.dispatch(sortByDate())
                }
                else if (e.target.value ==='amount'){
              this.props.dispatch(sortByAmount())
                }
            }}
            
                   >
                 <option value='date'>Sort By Date</option>
                 <option value= 'amount'>Sort By Amount</option>
                 </select>

                 <DateRangePicker
                 startDate={this.props.filter.startDate}
                 endDate={this.props.filter.endDate}
                 onDatesChange={this.onDatesChange}
                 focusedInput={this.state.calendarFocused}
                 onFocusChange={this.onFocusChange}
                 numberOfMonths={1}
                 isOutsideRange={()=> false}
                 showClearDates={true}

                 />

            </div>
        )
     }
 }
// const ExpenseFilterText = (props) => (
    //when using a class component u can only access the state by usung this.state name
// )

const mapStateFilter = (state) => {
return {
    filter: state.filter //the array or filter object
}
} 

export default connect(mapStateFilter)(ExpenseFilterText)