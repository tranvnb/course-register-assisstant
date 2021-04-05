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
