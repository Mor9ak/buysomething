import {NextResponse} from "next/server";
import {getAllCards} from "@/lib/cards/cardFunctions";

export async function GET (request: Request) {
    const cards = await getAllCards();

    if (cards.length <= 0) {
        return NextResponse.json({
            error: "empty data",
            data: new Date().toISOString()
        }, {status: 500})
    }

    console.log(new Date().toISOString());
    return NextResponse.json(cards);
}