
function ScheduleDetailsForm(props) {
  return(
    <div>
      <label>Schedule Name:</label>
      <input type="text" name="name" value={props.name} onChange={props.handleChange}></input>
      
      <label>Select Semester</label>
      <select value={props.semester} onChange={props.handleSelect}>
        <option value="Winter 2021">Winter 2021</option>
        <option value="Summer 2021">Summer 2021</option>
        <option value="Fall 2021">Fall 2021</option>
      </select>
      
    </div>
  )
}

export default ScheduleDetailsForm;
