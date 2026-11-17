export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Redirect www to apex
    if (url.hostname === "www.createdesign.pt") {
      url.hostname = "createdesign.pt";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    // Serve static assets
    return env.ASSETS.fetch(request);
  },
};
