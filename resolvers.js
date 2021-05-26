const resolvers = {
  Query: {
    rootSkill: () => skills[0],
  },
};

module.exports = resolvers;

const skills = [
  {
    id: 0,
    title: "Root Skill",
    author: "Peyton Cleveland",
    description: "This is the root skill node",
    parent: null,
    children: 1,
    created: 1622059168971,
  },
  {
    id: 1,
    title: "Software Development",
    author: "Peyton Cleveland",
    description: "Skill node for software development",
    parent: 0,
    children: null,
    created: 1622059168971,
  },
  {
    id: 2,
    title: "Design",
    author: "Peyton Cleveland",
    description: "Skill node for design",
    parent: 0,
    children: null,
    created: 1622059168971,
  },
];
