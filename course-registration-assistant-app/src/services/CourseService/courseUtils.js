const timeTable = ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"];

export const processCourse = (course) => {
  // Room and Building are here
  return {
    ...course,
    days: course.days?.map(schedule => {
      // checking if course is asychronize, means no day, time, and duration
      if (schedule.day !== "" && schedule.time !== "") {
      const courseTime = schedule.time.split('-');
      const beginOffset = timeTable.indexOf(courseTime[0].trim());
      const duration = extractDuration(...courseTime);
      // this is the detail decides the render on timetable
      return {
        ...schedule,
        numCourseInGroup: 1,
        indexInGroup: 0,
        offset: beginOffset,
        duration: duration
      };
    } else {
      return {
        ...schedule,
        numCourseInGroup: -1,
        indexInGroup: -1,
        offset: -1,
        duration: -1
      };
    }
    }).sort((i, j) => i.offset - j.offset)
  };
}

const extractDuration = (start, end) => {
  //can't access property "trim", start.split(...)[1] is undefined
  const startTime = (new Date()).setHours(start.split(":")[0].trim(), start.split(":")[1].trim(), "0");
  const endTime = (new Date()).setHours(end.split(":")[0].trim(), end.split(":")[1].trim(), "0");
  return Math.round((endTime - startTime) / 1000 / 60 / 30);
}