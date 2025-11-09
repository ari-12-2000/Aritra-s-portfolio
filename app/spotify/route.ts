export async function GET() {
  const res = await fetch("https://spotify-custom-api.onrender.com/spotify", {
    redirect: "follow",
  });
  const data = await res.json();

  return Response.json(data, {
    headers: { "Content-Type": "application/json" },
  });
}
