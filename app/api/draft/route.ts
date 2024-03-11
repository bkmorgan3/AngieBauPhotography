import { draftMode } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  draftMode().enable();
 
}
