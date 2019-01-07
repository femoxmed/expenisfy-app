import React from 'react';
import 'react-dates/initialize';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';



export default class ExpenseForm extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                description: props.expense ? props.expense.description : '',
                amount: props.expense ? props.expense.amount : '',
                note: props.expense ? props.expense.note : '',
                
                createdAt: moment(),

                calendarFocused: false,
                error: undefined
            }
        }

        onDescriptionChange = (e) => {
            const description = e.target.value
            this.setState(() => {

                return { description }

            })

        }
        onAmountChange = (e) => {
            const amount = e.target.value
            if (!amount || amount.match(/^\d*(\.\d{0,2})?$/)) {
                this.setState(() => {

                    return { amount }

                })
            }

        }
        onNoteChange = (e) => {
            const note = e.target.value

            this.setState(() => {

                return { note }

            })
        }

        onDateChange = (createdAt) => {
            if (createdAt) {
                this.setState(() => {
                    return { createdAt }
                })
            }
        }

        onFocusChange = ({ focused }) => {
            this.setState(() => {
                return { calendarFocused: focused }
            })
        }

        onSubmit = (e) => {
            e.preventDefault();

            if (!this.state.description || !this.state.amount) {
                const error = 'Description or Amount is empty'
                this.setState(() => ({ error }))
            } else {
                this.props.onSubmit({
                    description: this.state.description,
                    amount: parseFloat(this.state.amount, 10) * 100,
                    note: this.state.note,
                    createdAt: this.state.createdAt.valueOf()
                })
            }
        }




        render() {

            return ( 
                <div>
                <h2> Register form </h2> {
                    this.state.error && <p> { this.state.error } </p>} 
                    
                    <form onSubmit = { this.onSubmit } name = 'regForm' >

                        <input
                    name = 'desc'
                    type = 'text'
                    placeholder = 'Description'
                    value = { this.state.description }
                    onChange = { this.onDescriptionChange }
                    autoFocus
                        />

                        <input type = 'number'
                    placeholder = 'Amount'
                    value = { this.state.amount }
                    onChange = { this.onAmountChange }
                    />

                    <textArea type = 'text'
                    placeholder = 'Type a note for your expense'
                    value = { this.state.note }
                    onChange = { this.onNoteChange } />
                   
                        

                    <SingleDatePicker date = { this.state.createdAt }
                    onDateChange = { this.onDateChange }
                    focused = { this.state.calendarFocused }
                    onFocusChange = { this.onFocusChange }

                    numberOfMonths = { 1 }
                    isOutsideRange = {
                        () => { false } }
                />

                    <button type = 'submit'> Add Expenses </button> 
                    </form> 
                    </div>
                )

            }
        }
