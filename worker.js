export default {
  async fetch(request, env) {
    try {
      // Let the built-in static-file handler respond if it finds a match
      return await env.ASSETS.fetch(request);
    } catch (err) {
      // If no file is found, return a 404 or a custom page
      return new Response("Not found", { status: 404 });
    }
  },
};
