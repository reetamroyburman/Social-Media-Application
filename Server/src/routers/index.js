const express = require('express');
const router = express.Router();
const authRouter = require('./authRouter');
const postsRouter = require('./postsRouter');
const userRouter = require('./userRouter');

// Use the routers
router.use('/auth', authRouter);
router.use('/posts', postsRouter);
router.use('/user', userRouter);
router.get('/health-check', (req, res) => {
    res.status(200).send("OK from Server");
});

module.exports = router;