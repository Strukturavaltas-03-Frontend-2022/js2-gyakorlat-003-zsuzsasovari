const user = {
  firstName: 'John',
  lastName: 'Doe',
};

const {
  firstName: f = 'unknown',
  lastName: l = 'unknown',
  job: j = 'unknown'
} = user;

export {
  f,
  l,
  j,
};
