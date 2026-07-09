import {NextResponse} from "next/server";
import {getAllCards} from "@/lib/cardFunctions";

export async function GET (request: Request) {
    const cards = getAllCards();

    if (cards.length <= 0) {
        return NextResponse.json({
            error: "empty data",
            data: new Date().toISOString()
        }, {status: 500})
    }

    console.log(new Date().toISOString());
    return NextResponse.json(cards);
}