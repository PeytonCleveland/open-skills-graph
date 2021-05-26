const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get the root skill node"
    rootSkill: Skill
  }
  "A skill is either a single, indivisible knowledge area or a larger, more broad collection of other skills"
  type Skill {
    id: ID!
    "The skill's title"
    title: String!
    "The skill's description"
    description: String!
    "The skill's main author"
    author: String!
    "The skill's parent"
    parent: Skill
    "The skill's children"
    children: [Skill]
    "When the skill was created"
    created: String!
  }
`;

module.exports = typeDefs;
