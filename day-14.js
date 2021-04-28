// https://www.codewars.com/kata/56c2a067585d9ac8280003c9/train/javascript
function getSkillWithMatchedName(jobSkill, candidateSkills) {
  for (let i = 0; i < candidateSkills.length; i += 1) {
    const currentCandidateSkill = candidateSkills[i];
    if (currentCandidateSkill.name === jobSkill.name) {
      return currentCandidateSkill;
    }
  }
  return undefined;
}

function findSkillMatch(jobSkill, candidateSkills) {
  const skillWithMatchedName = getSkillWithMatchedName(
    jobSkill,
    candidateSkills
  );

  if (skillWithMatchedName !== undefined) {
    let calculatedExperience = skillWithMatchedName.experience;
    if (skillWithMatchedName.preference === "desired") {
      calculatedExperience *= 1.5;
    }
    if (calculatedExperience >= jobSkill.idealYears) {
      return skillWithMatchedName;
    }
  }
  return undefined;
}

function findSkillMatchForPrimaryAndSubstitutes(jobSkill, candidateSkills) {
  // try find primary skills match
  const primarySkillMatch = findSkillMatch(jobSkill, candidateSkills);
  if (primarySkillMatch !== undefined) {
    if (primarySkillMatch.preference === "avoid") {
      return undefined;
    }

    return primarySkillMatch;
  }

  if (primarySkillMatch === undefined && jobSkill.substitutions !== undefined) {
    // create substitution job skills array
    const substitutionJobSkills = [];
    jobSkill.substitutions.forEach((currentSubstitution) => {
      substitutionJobSkills.push({
        name: currentSubstitution.name,
        idealYears: jobSkill.idealYears,
      });
    });

    for (let i = 0; i < substitutionJobSkills.length; i += 1) {
      const currentSubstitutionJobSkill = substitutionJobSkills[i];
      const substitutionSkillMatch = findSkillMatch(
        currentSubstitutionJobSkill,
        candidateSkills
      );
      if (substitutionSkillMatch !== undefined) {
        return substitutionSkillMatch;
      }
    }
  }

  return undefined;
}

function match(candidate, job) {
  for (let i = 0; i < job.skills.length; i += 1) {
    const matchedSkill = findSkillMatchForPrimaryAndSubstitutes(
      job.skills[i],
      candidate.skills
    );
    if (matchedSkill === undefined) {
      return false;
    }
  }

  return true;
}

// програма працює не завжди коректно, раз показує 100% проходження, а раз декілька тестів фейляться. 
// З помилок немає інформації для дебагінгу (каже непрвильне очікуване значення, а яке і де саме не відомо)
