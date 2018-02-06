const { MockList } = require('graphql-tools')
const casual = require('casual');
// https://github.com/boo1ean/casual

const mocks = {
  Post: () => ({
    id: casual.integer((from = 1), (to = 1000)),
    title: casual.title,
    votes: casual.integer((from = 1), (to = 100))
  }),
  Author: () => ({
    id: casual.integer((from = 1), (to = 1000)),
    firstName: casual.first_name,
    lastName: casual.last_name,
    posts: () => new MockList([0, 3])
  })
};

module.exports = mocks;