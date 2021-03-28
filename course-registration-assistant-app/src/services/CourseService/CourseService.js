export const getAllCourses = () => {
  const initData = [
    {
      "name": "Monday",
      "courses": []
    },
    {
      "name": "Tuesday",
      "courses": [
        [
          {
            id: "1",
            title: "2200",
            details: { instructor: "Rahim Rahim", credit: 3 },
            offset: 3,
            duration: 4,
            preCoursePos: 0,
          },

          {
            id: "3",
            title: "2300",
            details: { instructor: "Brian Vo", credit: 3 },
            offset: 3,
            duration: 4,
            preCoursePos: 0,
          },
          {
            id: "4",
            title: "3380",
            details: { instructor: "Gabriel", credit: 3 },
            offset: 3,
            duration: 4,
            preCoursePos: 0,
          },
        ],
        [
          {
            id: "2",
            title: "2700",
            details: { instructor: "Michael", credit: 3 },
            offset: 7,
            duration: 4,
            preCoursePos: 5,
          },
        ],
        [

        ]]
    },
    {
      "name": "Wednesday",
      "courses": [
        [
          {
            id: "5",
            title: "2200",
            details: { instructor: "Rahim", credit: 3 },
            offset: 3,
            duration: 4,
            preCoursePos: 0,
          },
          {
            id: "6",
            title: "2700",
            details: { instructor: "Michael", credit: 3 },
            offset: 5,
            duration: 4,
            preCoursePos: 5,
          },
        ],
        [
          {
            id: "8",
            title: "3380",
            details: { instructor: "Gabriel", credit: 3 },
            offset: 10,
            duration: 6,
            preCoursePos: 0,
          },
        ]]
    },
    {
      "name": "Thursday",
      "courses": []
    },
    {
      "name": "Friday",
      "courses": []
    },
    {
      "name": "Saturday",
      "courses": []
    },
  ];
  return new Promise((resolve, reject) => {
    const newData = initData.map(({name, courses}) => {
      return {
        name, courses: courses.map(courseInGroup => {
          return courseInGroup.map(course => {return {...course, isSelected: false}});
        })
      }
    });
    console.log("newData", newData);
    resolve(newData);
  });
}

