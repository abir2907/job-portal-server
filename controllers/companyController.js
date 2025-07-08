// Register a new company
export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;
  const imageFile = req.file;
};

// Company login
export const loginCompany = async (req, res) => {};

// Get company data
export const getCompanyData = async (req, res) => {};

// Post a new job
export const postJob = async (req, res) => {};

// Get Company Job Applicants
export const getCompanyJobApplicants = async (req, res) => {};

// Get Company Posted Jobs
export const getCompanyPostedJobs = async (req, res) => {};

// Change Job Application Status
export const ChangeJobApplicationsStatus = async (req, res) => {};

// Change Job visibility
export const changeVisibility = async (req, res) => {};
