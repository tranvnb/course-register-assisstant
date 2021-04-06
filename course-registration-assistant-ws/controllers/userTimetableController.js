const { userTimetableService } = require('../services/index');

exports.addNewTimetable = async (req, res) => {
  const userId = req.params.userid;
  const newCourse = req.body;
  console.log(newCourse);
  userTimetableService.createNewTimetable(newCourse)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(400).json(error);
    })
}

exports.getAllTimetable = async (req, res) => {
  userTimetableService.getAllTimetable()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(400).json(error);
    })
}

exports.updateTimetable = async(req, res) => {
  const timetableId = req.params.timetableid;
  const newTimetable = req.body;
  userTimetableService.updateTimetable(timetableId, newTimetable)
  .then(result => {
    res.status(200).json(result);
  })
  .catch(error => {
    console.log(error);
    res.status(400).json(error);
  })
}