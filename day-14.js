// https://www.codewars.com/kata/56c2a067585d9ac8280003c9/train/javascript
function matchName(candidate, job) {
  if (candidate.name === job.name && candidate.preference !== "avoid") {
    return true;
  }
  if (candidate.preference === "avoid") {
    return false;
  }
  for (let i = 0; i < job.substitutions.length; i += 1) {
    if (job.substitutions[i].name === candidate.name) {
      return true;
    }
    if (job.substitutions[i].name === undefined) {
      return false;
    }
    return false;
  }
  return false;
}

function matchYears(candidate, job) {
  const bonusYears = candidate.experience / 2;
  if (candidate.experience >= job.idealYears) {
    return true;
  }
  if (
    candidate.preference === "desired" &&
    candidate.experience < job.idealYears
  ) {
    if (candidate.experience + bonusYears >= job.idealYears) {
      return true;
    }
    return false;
  }
  return false;
}

function matchSkill(jobSkill, candidateSkills) {
  for (let i = 0; i < candidateSkills.length; i += 1) {
    const isCandSkillMatch = matchName(candidateSkills[i], jobSkill);
    const isCandExsperMatch = matchYears(candidateSkills[i], jobSkill);
    if (isCandSkillMatch && isCandExsperMatch) {
      return true;
    }
  }
  return false;
}

function match(candidate, job) {
  let isSkillMatch = false;
  for (let i = 0; i < job.skills.length; i += 1) {
    isSkillMatch = matchSkill(job.skills[i], candidate.skills);
  }
  return isSkillMatch;
}
