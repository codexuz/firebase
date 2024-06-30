import type { APIRoute } from "astro";
import { supabase, app } from "../../../lib/server";
import { getFirestore } from "firebase-admin/firestore";


export const POST: APIRoute = async ({ request, redirect }) => {
  const body = await request.json();
  const q = body.q;
  const audio = body.audio;
  const testId = body.test_id;
  const part = body.part;
  const image1 = body.image1

  console.log(body)
     
  if(!q || !audio  || !testId || !part){
      return new Response("Maydonlar to'ldirilishi shart", {status: 400})
     }

    try {
       
      const { data, error } = await supabase
      .from('part_1')
      .insert({ image: image1, question: q, audio: audio, test_id: testId, part: part })

      return new Response(JSON.stringify(data));

    } catch (error) {
      return new Response("Something went wrong", {
        status: 500,
      });
    }
    return redirect("/index");
  };
