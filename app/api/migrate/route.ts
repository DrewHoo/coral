import { run } from "@/app/db/migrate"
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const result = await run()
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}