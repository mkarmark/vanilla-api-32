module.exports = async function (context, req) {
  context.res = {
    headers: {
      'Set-Cookie': 'foo=bar; Secure=false'
    },
    // status: 200, /* Defaults to 200 */
    body: { text: "Hello from the API" },
  };
};
