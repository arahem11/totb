// worker.js
export default {
  async fetch(request, env) {
    try {
      // Attempt to serve from the automatically bound static assets
      return await env.ASSETS.fetch(request);
    } catch (err) {
      // If no file is found, respond with a custom 404 or "Not found."
      return new Response("Not found", { status: 404 });
    }
  },
};
