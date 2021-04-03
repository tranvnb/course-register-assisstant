import { processCourse, testData } from "./courseUtils";

export const getAllCourses = () => {

  const cacheCourses = JSON.parse(localStorage.getItem("courses"));
  const now = new Date();
  const TTL = 2000; // live 2 seconds

  if (cacheCourses !== null && cacheCourses !== undefined && cacheCourses.expiry < now) {
    return cacheCourses.data;
  } else {
    return fetch(process.env.REACT_APP_WEB_SERVICE_URL + "/courses")
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();

      }).then(courses => {
        // preprocess data; 
        const processedCourses = courses.map(item => {
          return processCourse(item)
        });
        // do cache thing.
        const now = new Date();
        const cache = {
          data: processedCourses,
          expiry: now + TTL
        }

        localStorage.setItem("courses", JSON.stringify(processedCourses));

        return processedCourses;
      }).catch(error => {
        console.error(error);
        throw error;
      })
  }



  // return new Promise((resolve, reject) => {
  //   const newData = testData.map(item => processCourse(item));
  //   console.log("newData", newData);
  //   resolve(newData);
  // });
}

