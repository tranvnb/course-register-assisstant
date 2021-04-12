const { scheduleService } = require('../services/index');

/**
 * Uses the user email as the username parameter
 * @param {*} req 
 * @param {*} res 
 */
exports.getAllSchedulesByUsername = async (req, res) => {
  // Get schedule by username
  scheduleService.findByUsername(req.params.username)
    .then(result => {
      console.log("getAllSchedulesByUsername",result);
      res.json(result);
    })
    .catch(err => {
      console.log(`Error retrieving schedule for username: ${req.params.username}`);
      console.log(err);
    });
}

/**
 * 
 * @return Returns the newly created schedule document
 */
exports.createNewSchedule = async (req, res) => {
  scheduleService.createNewSchedule(req.body)
    .then(result => {
      res.json(result); 
    })
    .catch(err => {
      console.log(`Error creating new schedule for username: ${req.body.username}`);
      console.log(error);
    });

}

exports.updateSchedule = async (req, res) => {
  scheduleService.updateSchedule(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      console.log(`Error updating schedule for schedule id: ${req.body._id}`);
      console.log(error);
    });
}
