

import {Router} from "express";
import { authenticate } from "../../middlerware/authenticate.js";
import { getProfile } from "../../controllers/profile.controller.js";
import {versionHeaders} from "../../middlerware/versionHeaders.js";


const router = Router();
router.use(versionHeaders("1.0.0"))
router.get("/",authenticate,getProfile);
export default router;
