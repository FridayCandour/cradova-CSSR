const indexFile = Bun.file("app/dist/index.html");
const rg = /\.\w{2,4}$/; //? file with extension pattern
Bun.serve({
  port: 3001,
  async fetch(req) {
    const p = req.url.slice(req.url.indexOf("/", 7));
    const path = "app/dist/" + (rg.test(p) ? p : encodeURIComponent(p));
    const file = Bun.file(path);
    if (req.method === "GET") {
      if (await file.exists()) {
        if (rg.test(path)) return new Response(file);
        return new Response(file, {
          headers: {
            "Content-Type": "text/html;charset=utf-8",
          },
        });
      } else {
        return rg.test(path)
          ? new Response("Not Found")
          : new Response(indexFile, {
              headers: {
                "Content-Type": "text/html;charset=utf-8",
              },
            });
      }
    }
    try {
      // ?  CHECK IF THE REQUEST COMES FROM THE SAME ORIGIN
      const allowedOrigins = ["http://localhost:3001"];
      if (!allowedOrigins.includes(req.headers.get("origin"))) {
        return Response(JSON.stringify({ ok: false }));
      }
      const key =
        "app/dist/" + encodeURIComponent(req.headers.get("cradova-snapshot"));
      const html = await req.text();
      if (html) if (!(await Bun.file(key).exists())) await Bun.write(key, html);
    } catch (error) {
      console.log(error);
    }
    return new Response(JSON.stringify({ ok: true }));
  },
});

export {};
