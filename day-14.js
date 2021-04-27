// https://www.codewars.com/kata/56c2a067585d9ac8280003c9/train/javascript
function matchSkill(jobSkill, candidateSkills) {
  for (let i = 0; i < candidateSkills.length; i += 1) {
    if (
      candidateSkills[i].name === jobSkill.name &&
      candidateSkills[i].preference !== "avoid"
    ) {
      if (candidateSkills[i].experience >= jobSkill.idealYears) {
        return true;
      }
      if (
        candidateSkills[i].preference === "desired" &&
        candidateSkills[i].experience < jobSkill.idealYears
      ) {
        if (
          candidateSkills[i].experience + candidateSkills[i].experience / 2 >=
          jobSkill.idealYears
        ) {
          return true;
        }
        return false;
      }
      return false;
    }
    if (
      candidateSkills[i].name === jobSkill.name &&
      candidateSkills[i].preference === "avoid"
    ) {
      return false;
    }
  }
  return false;
}

function match(candidate, job) {
  for (let i = 0; i < job.skills.length; i += 1) {
    const isSkillMatch = matchSkill(job.skills[i], candidate.skills);
    if (!isSkillMatch) {
      return false;
    }
  }
  return true;
}

// програма працює не завжди коректно, раз показує 100% проходження, а раз 1-2 тести фейляться. Пофіксати баг мені не вдалось
