import { Issue } from "../models/issueRaise.models.js";
import { User } from "../models/user.models.js";
import {sendEmail} from "../utils/emailService.js"
import { Response } from "../models/response.models.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const createIssue = asyncHandler(async (req,res)=>{
    const {issue,description,address,requireDepartment} = req.body

    if (
        [issue,address,requireDepartment].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const availableUser = await User.findOne({ department: requireDepartment });

    if (!availableUser) {
        throw new ApiError(401, "Required Department is not available");
    }
    
    const task = await Issue.create(req.body)
    await task.save();

    
    // Send email to the user
    const subject = 'New Issue Assigned';
    const text = `Dear ${availableUser.fullName},

You have been assigned a new issue:

Issue: ${issue}
Description: ${description}
Address: ${address}

Please address this issue as soon as possible.

Thank you,
UAIMS HR`;

    await sendEmail(availableUser.email, subject, text);
 
    const response = await Response.create({ task: task._id });
    await response.save();

    return res
    .status(200)
    .json(new ApiResponse(201,{task,response},"Issue is created successfully"))
})

const getissue = asyncHandler(async (req,res)=>{

})


export {
    createIssue
}