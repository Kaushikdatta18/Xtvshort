exports.handler = async () => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Database configuration missing"
      })
    };
  }

  try {
    const response = await fetch(
      ${supabaseUrl}/rest/v1/xtv_videos?select=id,title,youtube_id,description,thumbnail_url&is_active=eq.true,
      {
        headers: {
          apikey: supabaseKey,
          Authorization: Bearer ${supabaseKey}
        }
      }
    );

    if (!response.ok) {
      throw new Error("Database request failed");
    }

    const videos = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store"
      },
      body: JSON.stringify({ videos })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Unable to load videos"
      })
    };
  }
};
