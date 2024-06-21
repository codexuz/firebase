import type { APIRoute } from "astro";
import { app } from "../../../lib/server";
import { getFirestore } from "firebase-admin/firestore";


export const POST: APIRoute = async ({ request, redirect }) => {
  const body = await request.json();
  const q = body.q;
  const audio = body.audio;
  const testId = body.test_id;
  const part = body.part;
  const image1 = body.image1
  const image2 = body.image2

  console.log(body)

    try {
      const db = getFirestore(app);
      const speakingRef = db.collection("speaking");
      var datas = await speakingRef.add({
        q,
        audio,
        test_id: testId,
        part,
        image1,
        image2
      });

      return new Response(JSON.stringify(datas));

    } catch (error) {
      return new Response("Something went wrong", {
        status: 500,
      });
    }
    return redirect("/index");
  };
