const express = require('express')
const router = express.Router();
const {find,create,findOne,update,deleteTask}=require('../controllers/task')


router.route('/api/v1/tasks')
            .get(find)
            .post(create);

router.route('/api/v1/tasks/:id')
            .get(findOne)
            .patch(update)
            .delete(deleteTask);

module.exports=router;