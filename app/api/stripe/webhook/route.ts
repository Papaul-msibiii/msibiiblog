import Stripe from "stripe";
import { headers } from "next/headers";
import { createSupabaseAdmin } from "@/lib/supabase";
import { buffer } from "node:stream/consumers";

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET!;

const stripe = new Stripe(process.env.STRIPE_SK_KEY!);

export async function POST(req: any) {
	const rawBody = await buffer(req.body);
	// try {
		const sig = headers().get("stripe-signature");
		let event;
		try {
			event = stripe.webhooks.constructEvent(
				rawBody,
				sig!,
				endpointSecret
			);
		} catch (err: any) {
			return Response.json({ error: `Webhook Error ${err?.message!} ` });
		}
		switch (event.type) {
			case "customer.updated":
				const customer = event.data.object;
				const subscription = await stripe.subscriptions.list({
					customer: customer.id,
				});
				if (subscription.data.length) {
					const sub = subscription.data[0];
					const {error} = await onSuccessSubscription(
						sub.id,
						customer.id,
						sub.status === "active",
						customer.email!
					);
					if(error?.message) {
						return Response.json({"error": error.message})
					}
				}
				break;
			default:
				console.log(`Unhandled event type ${event.type}`);
		}
		return Response.json({});
	// } catch (e) {
	// 	return Response.json({ error: `Webhook Error}` });
	// }
}

const onSuccessSubscription = async (
	subscription_id: string,
	customer_id: string,
	status: boolean,
	email: string
) => {
	console.log("please update user");
	const supabase = await createSupabaseAdmin();
	// const { data } = 
	return await supabase
		.from("users")
		.update({
			stripe_subscription_id: subscription_id,
			stripe_customer_id: customer_id,
			subscription_status: status,
		})
		.eq("email", email)
	// 	.select("id")
	// 	.single();
	// await supabase.auth.admin.updateUserById(data?.id!, {
	// 	user_metadata: { stripe_customer_id: null },
	// });
};