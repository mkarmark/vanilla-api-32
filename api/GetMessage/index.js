module.exports = async function (context, req) {
  context.res = {
    headers: {
      'Set-Cookie': 'foo=bar; Secure=true'
    },
    // status: 200, /* Defaults to 200 */
    body: { text: "Hello from the API" },
  };
};
