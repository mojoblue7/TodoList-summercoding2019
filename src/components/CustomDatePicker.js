import React from "react"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

// CSS Modules, react-datepicker-cssmodules.css
// import "react-datepicker/dist/react-datepicker-cssmodules.css"

class CustomDatePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: this.props.selected,
      disabled: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
    this.props.onChange(date)
  }

  render() {
    const { disabled, dateFormat } = this.props
    const { startDate } = this.state
    const { handleChange } = this
    return (
      <DatePicker
        className="date-picker"
        todayButton={"Today"}
        disabled={disabled}
        selected={startDate}
        onChange={handleChange}
        dateFormat={dateFormat}
        timeFormat="H:mm"
        timeIntervals={15}
        showMonthDropdown
        showYearDropdown
        showTimeSelect
      />
    )
  }
}
export default CustomDatePicker
