export async function GET() {
  const res = await fetch("https://spotify-custom-api.onrender.com/spotify");
  const data = await res.json();

  // If backend says login required → redirect browser to Spotify login
  if (data.status === "no_token" && data.login_url) {
    return Response.redirect(data.login_url);
  }

  // Otherwise just return JSON
  return Response.json(data, {
    headers: { "Content-Type": "application/json" },
  });
}

