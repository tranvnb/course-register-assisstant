const { scheduleService } = require('../services/index');

exports.getAllSchedulesByUsername = async (req, res) => {
  // Get schedule by username
  scheduleService.findByUsername(req.params.username)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(`Error retrieving schedule for username: ${req.params.username}`);
      console.log(err);
    });
}

exports.createNewSchedule = async (req, res) => {

  await scheduleService.createNewSchedule(req.body.username, req.body.name, req.body.semester)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(`Error creating new schedule for username: ${req.body.username}, name: ${req.body.name}, semester: ${req.body.semester}`);
      console.log(error);
    });
}
