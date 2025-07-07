// // import { NextResponse } from 'next/server';
// // import { TwitterApi } from 'twitter-api-v2';

// // // === ENV ===
// // const BOT_USER_ID = process.env.BOT_USER_ID!;
// // const BEARER = process.env.TWITTER_BEARER_TOKEN!;
// // const GROQ_API_KEY = process.env.GROQ_API_KEY!;
// // const twitterUserClient = new TwitterApi({
// //   appKey: process.env.TWITTER_API_KEY!,
// //   appSecret: process.env.TWITTER_API_SECRET!,
// //   accessToken: process.env.TWITTER_ACCESS_TOKEN!,
// //   accessSecret: process.env.TWITTER_ACCESS_SECRET!,
// // });


// // // const bearer = new TwitterApi(process.env.TWITTER_BEARER_TOKEN!);

// // // const twitterClient = bearer.readWrite;
// // // const twitterBearer = bearer.readOnly;

// // // === Types ===
// // interface Tweet {
// //   id: string;
// //   text: string;
// //   author_id: string;
// // }

// // interface TwitterUser {
// //   id: string;
// //   name: string;
// //   username: string;
// //   description: string;
// //   created_at: string;
// //   url?: string;
// //   public_metrics: {
// //     followers_count: number;
// //     following_count: number;
// //     tweet_count: number;
// //     listed_count: number;
// //   };
// // }

// // interface GroqResponse {
// //   choices: Array<{
// //     message: {
// //       content: string;
// //     };
// //   }>;
// // }

// // // === Memory Cache ===
// // const analyzedUsers = new Set<string>();
// // // let lastSeenId: string | null = null;

// // // === Main handler ===
// // export async function GET() {
// //   try {
// //     // === 1. Fetch mentions ===
// //     const mentionsRes = await fetch(
// //       `https://api.twitter.com/2/users/${BOT_USER_ID}/mentions`,
// //       {
// //         headers: {
// //           Authorization: `Bearer ${BEARER}`,
// //         },
// //       }
// //     );

// //     if (mentionsRes.status === 429) {
// //       console.warn("Rate limited by Twitter. Try again later.");
// //       const errorData = await mentionsRes.json();
// //       console.log(errorData);
// //       return NextResponse.json({ error: 'Rate limited by Twitter' }, { status: 429 });
// //     }

// //     const mentions = await mentionsRes.json();
// //     // console.log("These are the mentions",mentions);


// //     const tweets: Tweet[] = mentions.data || [];
 
// //     if (tweets.length === 0) {
// //       return NextResponse.json({ message: 'No new mentions' });
// //     }


// //     for (const tweet of tweets.reverse()) {
// //       // lastSeenId = tweet.id;
// //       const userId = tweet.id;

// //       if (analyzedUsers.has(userId)) continue;
// //       analyzedUsers.add(userId);

// //       // === 2. Fetch account profile ===
// //       const userRes = await fetch(`https://api.twitter.com/2/users/${userId}?user.fields=description,public_metrics,created_at,url`, {
// //         headers: {
// //           Authorization: `Bearer ${BEARER}`,
// //         },
// //       });

// //       if (userRes.status === 429) {
// //         console.warn("Rate limit hit on user fetch. Delaying...");
// //         await new Promise(r => setTimeout(r, 60 * 15000)); // wait 15 minute
// //         continue;
// //       }

// //       const userData = await userRes.json();
// //       const user: TwitterUser = userData.data;

// //       if (!user) continue;

// //       console.log("This is the user",user);





// //       // === 3. Send to Groq ===
// //       const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
// //         method: "POST",
// //         headers: {
// //           Authorization: `Bearer ${GROQ_API_KEY}`,
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           model: "llama-3.1-8b-instant",
// //           messages: [
// //             {
// //               role: "system",
// //               content: `You are AnubaAI, a crypto watchdog bot. Given a Twitter account's profile data, determine how trustworthy and legitimate it is as a crypto or Web3 project. Respond in under 280 characters. go through white paper and other relevant information that would help with your analysis`,
// //             },
// //             {
// //               role: "user",
// //               content: `Analyze this account:
// //               Name: ${user.name}
// //               Handle: @${user.username}
// //               Bio: ${user.description || 'No bio'}
// //               Followers: ${user.public_metrics.followers_count}
// //               Joined: ${user.created_at}
// //               Website: ${user.url || 'None'}`,
// //             },
// //           ],
// //           max_tokens: 150,
// //           temperature: 0.7,
// //         }),
// //       });

// //       if (!groqRes.ok) {
// //         console.error("Groq error:", await groqRes.text());
// //         continue;
// //       }

// //       const groqJson: GroqResponse = await groqRes.json();
// //       const reply = groqJson.choices?.[0]?.message?.content?.slice(0, 275) || "Couldn't generate analysis.";

// //       console.log("Replying with:", groqJson);

// //       // === 4. Post reply ===
// //       try {
// //         const result = await twitterUserClient.v2.reply(reply, tweet.id);
// //         console.log("Replied to tweet:", result);
// //         console.log("Tweet successfully sent with ID:", result.data?.id);

// //       } catch (err: any) {
// //         console.error("[Tweet POST ERROR]", err.data || err.message);
// //       }
// //       // === Optional: Slow down to avoid rate limit ===
// //       await new Promise(r => setTimeout(r, 1500));
// //     }
// //     return NextResponse.json({ ok: true, handled: tweets.length });
// //   } catch (err: unknown) {
// //     if (err && typeof err === "object" && "data" in err) {
// //       console.error("[Bot Error]", (err as any).data);
// //     } else {
// //       console.error("[Bot Error]", err);
// //     }
// //     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
// //   }
// // }



// import { NextResponse } from 'next/server';
// import { TwitterApi } from 'twitter-api-v2';

// // === ENV ===
// const BOT_USER_ID = process.env.BOT_USER_ID!;
// const BEARER = process.env.TWITTER_BEARER_TOKEN!;
// const GROQ_API_KEY = process.env.GROQ_API_KEY!;

// const twitterUserClient = new TwitterApi({
//   appKey: process.env.TWITTER_API_KEY!,
//   appSecret: process.env.TWITTER_API_SECRET!,
//   accessToken: process.env.TWITTER_ACCESS_TOKEN!,
//   accessSecret: process.env.TWITTER_ACCESS_SECRET!,
// });

// // === Types ===
// interface Tweet {
//   id: string;
//   text: string;
//   author_id: string;
// }

// interface TwitterUser {
//   id: string;
//   name: string;
//   username: string;
//   description?: string;
//   created_at: string;
//   url?: string;
//   public_metrics: {
//     followers_count: number;
//     following_count: number;
//     tweet_count: number;
//     listed_count: number;
//   };
// }

// interface GroqResponse {
//   choices: Array<{
//     message: {
//       content: string;
//     };
//   }>;
// }

// interface TwitterMentionsResponse {
//   data?: Tweet[];
//   meta?: {
//     result_count: number;
//     newest_id?: string;
//     oldest_id?: string;
//   };
// }

// interface TwitterUserResponse {
//   data?: TwitterUser;
//   errors?: Array<{
//     detail: string;
//     type: string;
//     title: string;
//   }>;
// }

// // === Memory Cache ===
// const analyzedUsers = new Set<string>();

// // === Main handler ===
// export async function GET(): Promise<NextResponse> {
//   try {
//     // === 1. Fetch mentions ===
//     const mentionsRes = await fetch(
//       `https://api.twitter.com/2/users/${BOT_USER_ID}/mentions`,
//       {
//         headers: {
//           Authorization: `Bearer ${BEARER}`,
//         },
//       }
//     );

//     if (mentionsRes.status === 429) {
//       console.warn("Rate limited by Twitter. Try again later.");
//       try {
//         const errorData = await mentionsRes.json();
//         console.log(errorData);
//       } catch (parseError) {
//         console.log("Could not parse error response");
//       }
//       return NextResponse.json({ error: 'Rate limited by Twitter' }, { status: 429 });
//     }

//     const mentions: TwitterMentionsResponse = await mentionsRes.json();
//     const tweets: Tweet[] = mentions.data || [];
 
//     if (tweets.length === 0) {
//       return NextResponse.json({ message: 'No new mentions' });
//     }

//     for (const tweet of tweets.reverse()) {
//       const userId = tweet.id;

//       if (analyzedUsers.has(userId)) continue;
//       analyzedUsers.add(userId);

//       // === 2. Fetch account profile ===
//       const userRes = await fetch(
//         `https://api.twitter.com/2/users/${userId}?user.fields=description,public_metrics,created_at,url`, 
//         {
//           headers: {
//             Authorization: `Bearer ${BEARER}`,
//           },
//         }
//       );

//       if (userRes.status === 429) {
//         console.warn("Rate limit hit on user fetch. Delaying...");
//         await new Promise(resolve => setTimeout(resolve, 60 * 15000)); // wait 15 minutes
//         continue;
//       }

//       const userData: TwitterUserResponse = await userRes.json();
//       const user: TwitterUser | undefined = userData.data;

//       if (!user) {
//         console.log("No user data found for userId:", userId);
//         continue;
//       }

//       console.log("This is the user", user);

//       // === 3. Send to Groq ===
//       const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${GROQ_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           model: "llama-3.1-8b-instant",
//           messages: [
//             {
//               role: "system",
//               content: `You are AnubaAI, a crypto watchdog bot. Given a Twitter account's profile data, determine how trustworthy and legitimate it is as a crypto or Web3 project. Respond in under 280 characters. go through white paper and other relevant information that would help with your analysis`,
//             },
//             {
//               role: "user",
//               content: `Analyze this account:
//               Name: ${user.name}
//               Handle: @${user.username}
//               Bio: ${user.description || 'No bio'}
//               Followers: ${user.public_metrics.followers_count}
//               Joined: ${user.created_at}
//               Website: ${user.url || 'None'}`,
//             },
//           ],
//           max_tokens: 150,
//           temperature: 0.7,
//         }),
//       });

//       if (!groqRes.ok) {
//         console.error("Groq error:", await groqRes.text());
//         continue;
//       }

//       const groqJson: GroqResponse = await groqRes.json();
//       const reply = groqJson.choices?.[0]?.message?.content?.slice(0, 275) || "Couldn't generate analysis.";

//       console.log("Replying with:", groqJson);

//       // === 4. Post reply ===
//       try {
//         const result = await twitterUserClient.v2.reply(reply, tweet.id);
//         console.log("Replied to tweet:", result);
//         console.log("Tweet successfully sent with ID:", result.data?.id);
//       } catch (err: unknown) {
//         if (err && typeof err === "object" && "data" in err) {
//           console.error("[Tweet POST ERROR]", (err as any).data);
//         } else if (err instanceof Error) {
//           console.error("[Tweet POST ERROR]", err.message);
//         } else {
//           console.error("[Tweet POST ERROR]", err);
//         }
//       }

//       // === Optional: Slow down to avoid rate limit ===
//       await new Promise(resolve => setTimeout(resolve, 1500));
//     }

//     return NextResponse.json({ ok: true, handled: tweets.length });
//   } catch (err: unknown) {
//     if (err && typeof err === "object" && "data" in err) {
//       console.error("[Bot Error]", (err as any).data);
//     } else if (err instanceof Error) {
//       console.error("[Bot Error]", err.message);
//     } else {
//       console.error("[Bot Error]", err);
//     }
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   }
// }


import { NextResponse } from 'next/server';
import { TwitterApi } from 'twitter-api-v2';

// === ENV ===
const BOT_USER_ID = process.env.BOT_USER_ID!;
const BEARER = process.env.TWITTER_BEARER_TOKEN!;
const GROQ_API_KEY = process.env.GROQ_API_KEY!;

const twitterUserClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY!,
  appSecret: process.env.TWITTER_API_SECRET!,
  accessToken: process.env.TWITTER_ACCESS_TOKEN!,
  accessSecret: process.env.TWITTER_ACCESS_SECRET!,
});

// === Types ===
interface Tweet {
  id: string;
  text: string;
  author_id: string;
}

interface TwitterUser {
  id: string;
  name: string;
  username: string;
  description?: string;
  created_at: string;
  url?: string;
  public_metrics: {
    followers_count: number;
    following_count: number;
    tweet_count: number;
    listed_count: number;
  };
}

interface GroqResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

interface TwitterMentionsResponse {
  data?: Tweet[];
  meta?: {
    result_count: number;
    newest_id?: string;
    oldest_id?: string;
  };
}

interface TwitterUserResponse {
  data?: TwitterUser;
  errors?: Array<{
    detail: string;
    type: string;
    title: string;
  }>;
}

// === Memory Cache ===
const analyzedUsers = new Set<string>();

// === Main handler ===
export async function GET(): Promise<NextResponse> {
  try {
    // === 1. Fetch mentions ===
    const mentionsRes = await fetch(
      `https://api.twitter.com/2/users/${BOT_USER_ID}/mentions`,
      {
        headers: {
          Authorization: `Bearer ${BEARER}`,
        },
      }
    );

    if (mentionsRes.status === 429) {
      console.warn("Rate limited by Twitter. Try again later.");
      try {
        const errorData = await mentionsRes.json();
        console.log(errorData);
      } catch {
        console.log("Could not parse error response");
      }
      return NextResponse.json({ error: 'Rate limited by Twitter' }, { status: 429 });
    }

    const mentions: TwitterMentionsResponse = await mentionsRes.json();
    const tweets: Tweet[] = mentions.data || [];
 
    if (tweets.length === 0) {
      return NextResponse.json({ message: 'No new mentions' });
    }

    for (const tweet of tweets.reverse()) {
      const userId = tweet.id;

      if (analyzedUsers.has(userId)) continue;
      analyzedUsers.add(userId);

      // === 2. Fetch account profile ===
      const userRes = await fetch(
        `https://api.twitter.com/2/users/${userId}?user.fields=description,public_metrics,created_at,url`, 
        {
          headers: {
            Authorization: `Bearer ${BEARER}`,
          },
        }
      );

      if (userRes.status === 429) {
        console.warn("Rate limit hit on user fetch. Delaying...");
        await new Promise(resolve => setTimeout(resolve, 60 * 15000)); // wait 15 minutes
        continue;
      }

      const userData: TwitterUserResponse = await userRes.json();
      const user: TwitterUser | undefined = userData.data;

      if (!user) {
        console.log("No user data found for userId:", userId);
        continue;
      }

      console.log("This is the user", user);

      // === 3. Send to Groq ===
      const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content: `You are AnubaAI, a crypto watchdog bot. Given a Twitter account's profile data, determine how trustworthy and legitimate it is as a crypto or Web3 project. Respond in under 280 characters. go through white paper and other relevant information that would help with your analysis`,
            },
            {
              role: "user",
              content: `Analyze this account:
              Name: ${user.name}
              Handle: @${user.username}
              Bio: ${user.description || 'No bio'}
              Followers: ${user.public_metrics.followers_count}
              Joined: ${user.created_at}
              Website: ${user.url || 'None'}`,
            },
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
      });

      if (!groqRes.ok) {
        console.error("Groq error:", await groqRes.text());
        continue;
      }

      const groqJson: GroqResponse = await groqRes.json();
      const reply = groqJson.choices?.[0]?.message?.content?.slice(0, 275) || "Couldn't generate analysis.";

      console.log("Replying with:", groqJson);

      // === 4. Post reply ===
      try {
        const result = await twitterUserClient.v2.reply(reply, tweet.id);
        console.log("Replied to tweet:", result);
        console.log("Tweet successfully sent with ID:", result.data?.id);
      } catch (err: unknown) {
        if (err && typeof err === "object" && "data" in err) {
          console.error("[Tweet POST ERROR]", (err as Record<string, unknown>).data);
        } else if (err instanceof Error) {
          console.error("[Tweet POST ERROR]", err.message);
        } else {
          console.error("[Tweet POST ERROR]", err);
        }
      }

      // === Optional: Slow down to avoid rate limit ===
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    return NextResponse.json({ ok: true, handled: tweets.length });
  } catch (err: unknown) {
    if (err && typeof err === "object" && "data" in err) {
      console.error("[Bot Error]", (err as Record<string, unknown>).data);
    } else if (err instanceof Error) {
      console.error("[Bot Error]", err.message);
    } else {
      console.error("[Bot Error]", err);
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}