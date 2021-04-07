const { userTimetableService } = require('../services/index');

exports.addNewTimetable = async (req, res) => {
  const userId = req.params.userid;
  const newTimetable = req.body;
  userTimetableService.createNewTimetable(newTimetable)
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

exports.getAllTimetableByUserId = async (req, res) => {
  const userId = req.params.userId;
  userTimetableService.getAllTimetableByUserId(userId)
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