import { processCourse, testData } from "./courseUtils";

export const getAllCourses = () => {
  const initDataBK = [
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

  console.log("localStorage.getItem", localStorage.getItem("aaaaa"));
  const cacheCourses = JSON.parse(localStorage.getItem("courses"));
  const now = new Date();
  const TTL = 2000; // live 2 seconds
  
  // if (cacheCourses !== null && cacheCourses !== undefined && cacheCourses.expiry < now) {
  //   return cacheCourses.data;
  // } else {
  //   return fetch(process.env.REACT_APP_WEB_SERVICE_URL + "/courses")
  //     .then(response => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //       //TODO test
  //       return testData;
  //       return response.json();
  //     }).then(courses => {
  //       // preprocess data; 
  //       const processedCourses = courses.map(item => {
  //         return processCourse(item)
  //       });
  //       // do cache thing.
  //       const now = new Date();
  //       const cache = {
  //         data: processedCourses,
  //         expiry: now + TTL
  //       }

  //       // return [processCourse({})];

  //       // localStorage.setItem("courses", JSON.stringify(processedCourses));
  //       return processedCourses;
  //     }).catch(error => {
  //       console.error(error);
  //       throw error;
  //     })
  // }



  return new Promise((resolve, reject) => {
    const newData = testData.map(item => processCourse(item));
    console.log("newData", newData);
    resolve(newData);
  });
}

