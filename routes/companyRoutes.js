import express from "express";
import {
  ChangeJobApplicationsStatus,
  changeVisibility,
  getCompanyData,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  loginCompany,
  postJob,
  registerCompany,
} from "../controllers/companyController.js";

const router = express.Router();

// Register a company
router.post("/register", registerCompany);

// Company login
router.post("/login", loginCompany);

// Get company data
router.get("/company", getCompanyData);

// Post a job
router.post("post-job", postJob);

// Get Applicants Data of Company
router.get("/applicants", getCompanyJobApplicants);

// Get Company Job List
router.get("/list-jobs", getCompanyPostedJobs);

// Change Applications Status
router.post("/change-status", ChangeJobApplicationsStatus);

// Change Applications Visibility
router.post("change-visibility", changeVisibility);

export default router;
