const indexFile = Bun.file("./dist/index.html");
Bun.serve({
  port: 3001,
  async fetch(req) {
    const path = "dist" + req.url.slice(req.url.indexOf("/", 7));
    const file = Bun.file(path);
    if (req.method === "GET") {
      if (await file.exists()) {
        return /\.\w{2,4}$/.test(path)
          ? new Response(file)
          : new Response(indexFile, {
            headers: {
              "Content-Type": "text/html;charset=utf-8",
            },
          });
      }
      return new Response(indexFile, {
        headers: {
          "Content-Type": "text/html;charset=utf-8",
        },
      });
    }
    try {
      // ?  CHECK IF THE REQUEST COMES FROM THE SAME ORIGIN
      const allowedOrigins = ["localhost:3000"];
      if (!allowedOrigins.includes(req.headers.origin)) return Response({});
      const key = req.headers["cradova-snapshot"];
      if (key) {
        const html = await req.text();
        console.log(key, html);
        if (html) {
          await Bun.write(key, html);
        }
      }
    } catch (error) {}
    return new Response({ ok: true });
  },
});

export {};
