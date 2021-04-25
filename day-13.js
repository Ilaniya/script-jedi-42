// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript
function match(candidate, job) {
  if (candidate.minSalary === undefined || job.maxSalary === undefined) {
    throw new Error("Sallary is absent");
  }
  return candidate.minSalary - candidate.minSalary / 10 <= job.maxSalary;
}

// https://www.codewars.com/kata/56c2578be8b139bd5c001bd8/train/javascript
function matchLocations(candidate, jobLocations) {
  const candLocations = [candidate.currentLocation];
  for (let i = 0; i < candidate.desiredLocations.length; i += 1) {
    candLocations.push(candidate.desiredLocations[i]);
  }
  for (let i = 0; i < candLocations.length; i += 1) {
    if (jobLocations.includes(candLocations[i])) {
      return true;
    }
  }
  return false;
}
function matchEquity(candidateEquity, jobEquity) {
  if (candidateEquity === true && jobEquity > 0) {
    return true;
  }
  if (candidateEquity === false && jobEquity === 0) {
    return true;
  }
  if (candidateEquity === false && jobEquity > 0) {
    return true;
  }
  return false;
}

function matchCandidate(candidate, job) {
  const isEquityMatch = matchEquity(candidate.desiresEquity, job.equityMax);
  const matchLocationsResult = matchLocations(candidate, job.locations);
  const result = isEquityMatch && matchLocationsResult;
  return result;
}

function match(job, candidates) {
  const resultArr = [];
  for (let i = 0; i < candidates.length; i += 1) {
    const isCandidateSuitable = matchCandidate(candidates[i], job);
    if (isCandidateSuitable) {
      resultArr.push(candidates[i]);
    }
  }
  return resultArr;
}

