const timeTable = ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"];

const newCourse = {
  id: "111111",
  title: "327577",
  details: { instructor: "Reza", credit: 4 },
  schedule: [
    { day: "Monday", time: "10:30 - 12:20" },
    { day: "tuesday", time: "10:30 - 13:20" },
    { day: "tuesday", time: "12:30 - 14:20" },
    { day: "Friday", time: "08:30 - 10:20" }
  ]
}

const defaultCourse = {
  "CRN": "23723",
  "subject": "CSIS 2260 004",
  "credit": "3",
  "title": "Operating Systems",
  "max": "9",
  "enrolled": "0",
  "remain": "9",
  "wait": "0",
  "status": "Open",
  "startEnd": "10-MAY-2021 to 09-AUG-2021",
  "campus": "O",
  "instructor": "Noman Saleem",
  "prerequisites": "Yes",
  "days": [
    {
      "day": "Wed",
      "time": "10:30 - 12:20",
      "buiding": "Building:",
      "rom": "Room:"
    },
    {
      "day": "Wed",
      "time": "12:30 - 14:20",
      "buiding": "Building:",
      "rom": "Room:"
    }
  ],
  "sessionnote": "Section Notes:: CSIS 2260 004 is restricted to students in the following programs: Cmpt Studies and Info Systems Diploma, Data and Analytics, Web and Mobile Computing, Emerging Technology PD Diploma, Information & Communication Technology PD Diploma, Data Analytics PD Diploma, and Emerging Technology PB Diploma.On Wednesday, March 24, 2021 at 10:30am registration opens to students in the following programs: BBA-Accounting - Bach Degree FT, Accounting Diploma, Cmpt Studies and Info Systems Diploma, Comm and Busn Admin Diploma, General Business Certificate, General Business Diploma, Accounting Post-Degree Diploma, BBA-Fin Serv & Admin-Bach Degree FT, Busn Mgmt Diploma – General Business, Marketing Diploma.Students should plan to be available on-line at scheduled course times. This course will include synchronous on-line activities."
}

export const testData = [
  {
    "CRN": "23723",
    "subject": "CSIS 2260 004",
    "credit": "3",
    "title": "Operating Systems",
    "max": "9",
    "enrolled": "0",
    "remain": "9",
    "wait": "0",
    "status": "Open",
    "startEnd": "10-MAY-2021 to 09-AUG-2021",
    "campus": "O",
    "instructor": "Noman Saleem",
    "prerequisites": "Yes",
    "days": [
      {
        "day": "Wed",
        "time": "10:30 - 12:20",
        "buiding": "Building:",
        "rom": "Room:"
      },
      {
        "day": "Wed",
        "time": "12:30 - 14:20",
        "buiding": "Building:",
        "rom": "Room:"
      }
    ],
    "sessionnote": "Section Notes:: CSIS 2260 004 is restricted to students in the following programs: Cmpt Studies and Info Systems Diploma, Data and Analytics, Web and Mobile Computing, Emerging Technology PD Diploma, Information & Communication Technology PD Diploma, Data Analytics PD Diploma, and Emerging Technology PB Diploma.On Wednesday, March 24, 2021 at 10:30am registration opens to students in the following programs: BBA-Accounting - Bach Degree FT, Accounting Diploma, Cmpt Studies and Info Systems Diploma, Comm and Busn Admin Diploma, General Business Certificate, General Business Diploma, Accounting Post-Degree Diploma, BBA-Fin Serv & Admin-Bach Degree FT, Busn Mgmt Diploma – General Business, Marketing Diploma.Students should plan to be available on-line at scheduled course times. This course will include synchronous on-line activities."
  },
  {
    "CRN": "23725",
    "subject": "CSIS 2260 006",
    "credit": "3",
    "title": "Operating Systems",
    "max": "10",
    "enrolled": "0",
    "remain": "10",
    "wait": "0",
    "status": "Open",
    "startEnd": "10-MAY-2021 to 09-AUG-2021",
    "campus": "O",
    "instructor": "Noman Saleem",
    "prerequisites": "Yes",
    "days": [
      {
        "day": "Wed",
        "time": "10:00 - 12:00",
        "buiding": "Building:",
        "rom": "Room:"
      },
      {
        "day": "Thu",
        "time": "10:30 - 12:20",
        "buiding": "Building:",
        "rom": "Room:"
      }
    ],
    "sessionnote": "Section Notes:: CSIS 2260 006 is restricted to students in the following programs: Cmpt Studies and Info Systems Diploma, Data and Analytics, Web and Mobile Computing, Emerging Technology PD Diploma, Information & Communication Technology PD Diploma, Data Analytics PD Diploma, and Emerging Technology PB Diploma.On Wednesday, March 24, 2021 at 10:30am registration opens to students in the following programs: BBA-Accounting - Bach Degree FT, Accounting Diploma, Cmpt Studies and Info Systems Diploma, Comm and Busn Admin Diploma, General Business Certificate, General Business Diploma, Accounting Post-Degree Diploma, BBA-Fin Serv & Admin-Bach Degree FT, Busn Mgmt Diploma – General Business, Marketing Diploma.Students should plan to be available on-line at scheduled course times. This course will include synchronous on-line activities."
  }, {
    "CRN": "23724",
    "subject": "CSIS 2260 005",
    "credit": "3",
    "title": "Operating Systems",
    "max": "10",
    "enrolled": "0",
    "remain": "10",
    "wait": "0",
    "status": "Open",
    "startEnd": "10-MAY-2021 to 09-AUG-2021",
    "campus": "O",
    "instructor": "Noman Saleem",
    "prerequisites": "Yes",
    "days": [
      {
        "day": "Wed",
        "time": "10:30 - 12:20",
        "buiding": "Building:",
        "rom": "Room:"
      },
      {
        "day": "Thu",
        "time": "08:30 - 10:20",
        "buiding": "Building:",
        "rom": "Room:"
      }
    ],
    "sessionnote": "Section Notes:: CSIS 2260 005 is restricted to students in the following programs: Cmpt Studies and Info Systems Diploma, Data and Analytics, Web and Mobile Computing, Emerging Technology PD Diploma, Information & Communication Technology PD Diploma, Data Analytics PD Diploma, and Emerging Technology PB Diploma.On Wednesday, March 24, 2021 at 10:30am registration opens to students in the following programs: BBA-Accounting - Bach Degree FT, Accounting Diploma, Cmpt Studies and Info Systems Diploma, Comm and Busn Admin Diploma, General Business Certificate, General Business Diploma, Accounting Post-Degree Diploma, BBA-Fin Serv & Admin-Bach Degree FT, Busn Mgmt Diploma – General Business, Marketing Diploma.Students should plan to be available on-line at scheduled course times. This course will include synchronous on-line activities."
  },
  {
    "CRN": "23752",
    "subject": "CSIS 2260 007",
    "credit": "3",
    "title": "Operating Systems",
    "max": "9",
    "enrolled": "0",
    "remain": "9",
    "wait": "0",
    "status": "Open",
    "startEnd": "10-MAY-2021 to 09-AUG-2021",
    "campus": "O",
    "instructor": "Michael Ma",
    "prerequisites": "Yes",
    "days": [
      {
        "day": "Thu",
        "time": "10:30 - 12:20",
        "buiding": "Building:",
        "rom": "Room:"
      },
      {
        "day": "Thu",
        "time": "12:30 - 14:20",
        "buiding": "Building:",
        "rom": "Room:"
      }
    ],
    "sessionnote": "Section Notes:: CSIS 2260 007 is restricted to students in the following programs: Cmpt Studies and Info Systems Diploma, Data and Analytics, Web and Mobile Computing, Emerging Technology PD Diploma, Information & Communication Technology PD Diploma, Data Analytics PD Diploma, and Emerging Technology PB Diploma.On Wednesday, March 24, 2021 at 10:30am registration opens to students in the following programs: BBA-Accounting - Bach Degree FT, Accounting Diploma, Cmpt Studies and Info Systems Diploma, Comm and Busn Admin Diploma, General Business Certificate, General Business Diploma, Accounting Post-Degree Diploma, BBA-Fin Serv & Admin-Bach Degree FT, Busn Mgmt Diploma – General Business, Marketing Diploma.Students should plan to be available on-line at scheduled course times. This course will include synchronous on-line activities."
  },
  {
    "CRN": "23753",
    "subject": "CSIS 2260 008",
    "credit": "3",
    "title": "Operating Systems",
    "max": "10",
    "enrolled": "0",
    "remain": "10",
    "wait": "0",
    "status": "Open",
    "startEnd": "10-MAY-2021 to 09-AUG-2021",
    "campus": "O",
    "instructor": "Michael Ma",
    "prerequisites": "Yes",
    "days": [
      {
        "day": "Thu",
        "time": "10:30 - 12:20",
        "buiding": "Building:",
        "rom": "Room:"
      },
      {
        "day": "Fri",
        "time": "08:30 - 10:20",
        "buiding": "Building:",
        "rom": "Room:"
      }
    ],
    "sessionnote": "Section Notes:: CSIS 2260 008 is restricted to students in the following programs: Cmpt Studies and Info Systems Diploma, Data and Analytics, Web and Mobile Computing, Emerging Technology PD Diploma, Information & Communication Technology PD Diploma, Data Analytics PD Diploma, and Emerging Technology PB Diploma.On Wednesday, March 24, 2021 at 10:30am registration opens to students in the following programs: BBA-Accounting - Bach Degree FT, Accounting Diploma, Cmpt Studies and Info Systems Diploma, Comm and Busn Admin Diploma, General Business Certificate, General Business Diploma, Accounting Post-Degree Diploma, BBA-Fin Serv & Admin-Bach Degree FT, Busn Mgmt Diploma – General Business, Marketing Diploma.Students should plan to be available on-line at scheduled course times. This course will include synchronous on-line activities."
  },
]

const afterProcessCourse = {
  "CRN": "23723",
  "subject": "CSIS 2260 004",
  "credit": "3",
  "title": "Operating Systems",
  "max": "9",
  "enrolled": "0",
  "remain": "9",
  "wait": "0",
  "status": "Open",
  "startEnd": "10-MAY-2021 to 09-AUG-2021",
  "campus": "O",
  "instructor": "Noman Saleem",
  "prerequisites": "Yes",
  "days": [
    {
      "day": "Wed",
      "time": "10:30 - 12:20",
      "buiding": "Building:",
      "rom": "Room:",
      "numCourseInGroup": 1,
      "indexInGroup": 0,
      "offset": 7,
      "duration": 4
    },
    {
      "day": "Wed",
      "time": "12:30 - 14:20",
      "buiding": "Building:",
      "rom": "Room:",
      "numCourseInGroup": 0,
      "indexInGroup": 1,
      "offset": 11,
      "duration": 4
    }
  ],
  "sessionnote": "Section Notes:: CSIS 2260 004 is restricted to students in the following programs: Cmpt Studies and Info Systems Diploma, Data and Analytics, Web and Mobile Computing, Emerging Technology PD Diploma, Information & Communication Technology PD Diploma, Data Analytics PD Diploma, and Emerging Technology PB Diploma.On Wednesday, March 24, 2021 at 10:30am registration opens to students in the following programs: BBA-Accounting - Bach Degree FT, Accounting Diploma, Cmpt Studies and Info Systems Diploma, Comm and Busn Admin Diploma, General Business Certificate, General Business Diploma, Accounting Post-Degree Diploma, BBA-Fin Serv & Admin-Bach Degree FT, Busn Mgmt Diploma – General Business, Marketing Diploma.Students should plan to be available on-line at scheduled course times. This course will include synchronous on-line activities.",
  "isSelected": false
}

export const processCourse = (course) => {
  // Room and Building are here
  return {
    ...course,
    isSelected: false,
    days: course.days.map(schedule => {
      const courseTime = schedule.time.split('-');
      const beginOffset = timeTable.indexOf(courseTime[0].trim());
      const duration = extractDuration(...courseTime);
      // this is the detail decides the render on timetable
      return {
        ...schedule,
        numCourseInGroup: 1,
        indexInGroup: 0,
        // id: course.id + "-" + index,
        offset: beginOffset,
        duration: duration
      };
    }).sort((i, j) => i.offset - j.offset)
  };
}

const extractDuration = (start, end) => {
  const startTime = (new Date()).setHours(start.split(":")[0].trim(), start.split(":")[1].trim(), "0");
  const endTime = (new Date()).setHours(end.split(":")[0].trim(), end.split(":")[1].trim(), "0");
  return Math.round((endTime - startTime) / 1000 / 60 / 30);
}

const insertCourses = (newCourse, curCourses) => {
  // console.log("InsertCourses: ", newCourse, curCourses);
  let updatedCourses = [...curCourses];
  newCourse.forEach((newItem, index) => {
    // Each time add new item, we have to run all over again to add a new one => need to improve because it O(n*m)
    updatedCourses = updatedCourses.map(({ name, courses }) => {
      const coursesOfDay = [...courses]; //clone object but not sure about its child objects
      if (newItem.day.toLowerCase() === name.toLowerCase()) {
        // found the day in week to add new courses, then search for available col to insert new Item
        let added = false;
        coursesOfDay.map(coursesInCol => {
          if (!added) {
            for (let i = 0; i < coursesInCol.length; i++) {
              // ASSUMMING that no new course is out of the range from 7:00 to 18:30
              if ((newItem.offset + newItem.duration <= coursesInCol[i].offset) || // new item is below current checking item
                (newItem.offset >= coursesInCol[i].offset + coursesInCol[i].duration)
                && (i + 1 >= coursesInCol.length || newItem.offset + newItem.duration < coursesInCol[i + 1].offset))  // new item is above current checking item and below next item if it exists
              {
                coursesInCol.splice(i, 0, newItem); // if I HAVE TO USE IMMUTABLE OBJECT, this line must be re-written because splice change the original array not create a new array
                added = true;
                break;
              }
            }
          }

          //sort array to make sure all courses are in time order
          return coursesInCol.sort((i, j) => i.offset - j.offset);
        });
        //if can not find any slot to insert, this mean I have to create a new column, which is an array of objects
        if (!added) {
          coursesOfDay.push([newItem]);
          added = true;
        }
      }
      // console.log("course each insertion: ", coursesOfDay);
      return { name: name, courses: coursesOfDay }
    })
  });
  return updatedCourses;
}

const insertCoursesBK = (newCourse, curCourses) => {
  // console.log("InsertCourses: ", newCourse, curCourses);
  let updatedCourses = [...curCourses];
  newCourse.forEach((newItem, index) => {
    // Each time add new item, we have to run all over again to add a new one => need to improve because it O(n*m)
    updatedCourses = updatedCourses.map(({ name, courses }) => {
      const coursesOfDay = [...courses]; //clone object but not sure about its child objects
      if (newItem.day.toLowerCase() === name.toLowerCase()) {
        // found the day in week to add new courses, then search for available col to insert new Item
        let added = false;
        coursesOfDay.map(coursesInCol => {
          if (!added) {
            for (let i = 0; i < coursesInCol.length; i++) {
              // ASSUMMING that no new course is out of the range from 7:00 to 18:30
              if ((newItem.offset + newItem.duration <= coursesInCol[i].offset) || // new item is below current checking item
                (newItem.offset >= coursesInCol[i].offset + coursesInCol[i].duration)
                && (i + 1 >= coursesInCol.length || newItem.offset + newItem.duration < coursesInCol[i + 1].offset))  // new item is above current checking item and below next item if it exists
              {
                coursesInCol.splice(i, 0, newItem); // if I HAVE TO USE IMMUTABLE OBJECT, this line must be re-written because splice change the original array not create a new array
                added = true;
                break;
              }
            }
          }

          //sort array to make sure all courses are in time order
          return coursesInCol.sort((i, j) => i.offset - j.offset);
        });
        //if can not find any slot to insert, this mean I have to create a new column, which is an array of objects
        if (!added) {
          coursesOfDay.push([newItem]);
          added = true;
        }
      }
      // console.log("course each insertion: ", coursesOfDay);
      return { name: name, courses: coursesOfDay }
    })
  });
  return updatedCourses;
}