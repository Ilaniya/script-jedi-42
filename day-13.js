// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript
function match(candidate, job) {
  if (candidate.minSalary === undefined || job.maxSalary === undefined) {
    throw new Error("Salary is absent");
  }
  if (candidate.minSalary - candidate.minSalary / 10 <= job.maxSalary) {
    return true;
  }
  if (candidate.minSalary - candidate.minSalary / 10 > job.maxSalary) {
    return false;
  }
}


// https://www.codewars.com/kata/56c2578be8b139bd5c001bd8/train/javascript
