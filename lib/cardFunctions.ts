import fs from 'node:fs/promises';
import path from 'path';
import {CardProps} from "@/shared/Card";

const filePath = path.join(process.cwd(), 'lib', 'data', 'cards.json');

export async function ensureData() {
    try {
        await fs.access(filePath, fs.constants.F_OK);
        console.log('File exist');
    } catch (error) {
        console.log(`File not found, creating new, ${ error}`);
        await fs.writeFile(filePath, JSON.stringify([]));
    }
}

export async function getCard(id: string | number): Promise<CardProps | null> {
    console.log(`Get card - id: ${id}; type - ${typeof id}`);

    try {
        await ensureData();
        const rawData : CardProps[] = JSON.parse(await fs.readFile(filePath, 'utf8'));

        const idStr = String(id);
        const card = rawData.find((card) => card.id === idStr);

        return card || null;

    } catch (error) {
        console.log(`Error - ${new Date().toISOString()} - ${error}`);
        return null;
    }
}

export async function getAllCards(): Promise<CardProps[]> {
    await ensureData()
    console.log(`Get all cards`);
    return JSON.parse(await fs.readFile(filePath, 'utf8'));
}