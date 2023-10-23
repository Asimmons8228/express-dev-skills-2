const Skill = require("../model/skill");

const index = (req, res) => {
  res.render("skills/index", {
    skills: Skill.getAll(),
    title: "All Skills",
  });
};

const createSkill = (req, res) => {
  res.render("skills/new", {
    title: "New Skill",
  });
};

const addSkill = (req, res) => {
  const { skill, level } = req.body;

  const newSkill = { skill, level };

  Skill.addOne(newSkill);

  res.redirect("/skills");
};

const show = (req, res) => {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
  });
};

module.exports = { index, new: createSkill, addSkill, show };
