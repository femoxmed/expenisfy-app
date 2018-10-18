import moment from 'moment'

const FilterExpense = (expense, { text, sortBy, startDate, EndDate }) => {

    return expense.filter((expense) => {
        // const createdAtMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        // const endDateMatch = typeof EndDate !== 'number' || expense.createdAt <= endDateMatch;
        // const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        const createdAtMoment = moment(expense.createdAt)
        const createdAtMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        
        const endDateMatch = EndDate ? EndDate.isSameOrAfter(createdAtMoment , 'day') : true 
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        // it will return the filtered expense value
        // which is assigned to expenses object when its called
        return createdAtMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}
export default FilterExpense