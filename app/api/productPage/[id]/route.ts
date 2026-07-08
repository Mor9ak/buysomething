import {NextResponse} from "next/server";
import {getCard} from "@/lib/cardFunctions";

export async function GET(request: Request, {params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const card = getCard(id);

    if (card === null) {
        return NextResponse.json({
                error: "card not found",
                data: new Date().toISOString(),
            }, {status: 404}
        );
    }

    console.log(new Date().toISOString());
    return NextResponse.json(card);
}