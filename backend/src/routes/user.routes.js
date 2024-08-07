import { Router } from "express";
import { 
    loginUser, 
    logoutUser, 
    registerUser, 
    refreshAccessToken, 
    changeCurrentPassword, 
    getCurrentUser, 
    updateAccountDetails,
    getdepartment
} from "../controllers/user.controllers.js";


import { createIssue } from "../controllers/issue.controllers.js";

import { verifyJWT } from "../middlewares/auth.middlewares.js";


const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT,  logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/update-account").patch(verifyJWT, updateAccountDetails)

router.route("/raise-issue").post(createIssue)
router.route("/get-department").get(verifyJWT,getdepartment)
export default router