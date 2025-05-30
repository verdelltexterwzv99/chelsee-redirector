// deno.js - Minimal entry point
Deno.serve(async (req) => {
  const url = new URL(req.url);
  // Serve index.html for all routes
  const html = await Deno.readTextFile("./index.html");
  return new Response(html, {
    headers: { "Content-Type": "text/html" }
  });
});