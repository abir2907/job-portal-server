import Job from "../models/Job.js";

// Get All Jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ visible: true }).populate({
      path: "companyId",
      select: "-password",
    });

    res.json({ success: true, jobs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get Single Job Using JobID
export const getJobById = async (req, res) => {};
