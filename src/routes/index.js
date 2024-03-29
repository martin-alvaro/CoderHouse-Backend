import {Router} from "express"
import cartRouter from './cartRouter.js'
import productRouter from './productRouter.js'
import userRouter from './userRouter.js'
import viewsRouter from './viewsRouter.js'
import messageRouter from './message.router.js'
import sessionRouter from './sessionsRouter.js'
import mockingRouter from './mockingRouter.js'
import logger from './loggerRouter.js'

const router = Router()

router.use("/", viewsRouter);
router.use("/api/products", productRouter);
router.use("/api/carts", cartRouter);
router.use("/api/chat", messageRouter);
router.use("/users", userRouter);
router.use('/api/sessions', sessionRouter)
router.use('/mockingproducts', mockingRouter)
router.use('/loggerTest', logger)

export default router