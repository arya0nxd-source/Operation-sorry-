export async function onRequest(context) {
  const auth = context.request.headers.get("Authorization") || "";
  const password = context.env.SITE_PASSWORD;

  const reject = () => new Response("Password required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Operation Sorry"'
    }
  });

  if (!password) {
    return new Response("Password not configured", { status: 503 });
  }

  if (!auth.startsWith("Basic ")) return reject();

  let decoded;
  try {
    decoded = atob(auth.slice(6));
  } catch {
    return reject();
  }

  const i = decoded.indexOf(":");
  if (i < 0) return reject();

  if (decoded.slice(0, i) !== "ginnii" ||
      decoded.slice(i + 1) !== password) return reject();

  return context.next();
}
