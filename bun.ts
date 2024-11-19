const indexFile = Bun.file("./app/dist/index.html");
const rg = /\.\w{2,4}$/; //? file with extension pattern
Bun.serve({
  port: 3001,
  async fetch(req) {
    const path = "app/dist" + req.url.slice(req.url.indexOf("/", 7));
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
      const key = "app/dist" + req.headers.get("cradova-snapshot");
      if (key) {
        const html = await req.text();
        if (html) {
          await Bun.write(key, html);
        }
      }
    } catch (error) {
      console.log(error);
    }
    return new Response(JSON.stringify({ ok: true }));
  },
});

export {};
