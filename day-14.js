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

function match(candidate, job) {
  for (let i = 0; i < job.skills.length; i += 1) {
    for (let j = 0; j < candidate.skills.length; j += 1) {
      const isSkillNameMatch = matchName(candidate.skills[j], job.skills[i]);
      const isExperienceMatch = matchYears(candidate.skills[j], job.skills[i]);
      if (isExperienceMatch && isSkillNameMatch) {
        return true;
      }
    }
  }
  return false;
}


// третину із додаткових тестів програма не проходить. Ті помилки, що видаються мені не вдалось відтворити в себе, 
// хоч перепробувала багато варіантів, в мене видається очікуваний результат. 
// Для подальшого дебагу і пошуку помилок бракує детальнішої інформації по тих тестах, які не проходять.

