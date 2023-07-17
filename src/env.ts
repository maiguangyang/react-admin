const Env = {
  baseUri: process.env.NODE_ENV === 'production' ? 'http://localhost:8080/graphql' : 'http://localhost:8080/graphql',
};

export default Env;
