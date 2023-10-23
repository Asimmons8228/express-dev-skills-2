const Skills = [
  { id: 1, skill: "Tennis", level: "Adept" },
  { id: 2, skill: "Basketball", level: "Intermediate" },
  { id: 3, skill: "Boxing", level: "Master" },
];

function addOne(skill) {
  const id = Skills.length + 1;
  skill.id = id;
  Skills.push(skill);
}

function getAll() {
  return Skills;
}

const getOne = (id) => {
  id = parseInt(id);
  return Skills.find((skill) => skill.id === id);
};
module.exports = {
  getAll,
  addOne,
  getOne,
};
