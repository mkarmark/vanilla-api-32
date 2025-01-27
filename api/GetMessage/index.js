module.exports = async function (context, req) {
  context.res = {
    headers: {
      'Set-Cookie': 'foo=bar'
    },
    // status: 200, /* Defaults to 200 */
    body: { text: "Hello from the API" },
  };
};
