const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVicnBicXFvemZramFrdHRqZWRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5NzI1NzksImV4cCI6MTk2MzU0ODU3OX0.suvrkIHVzCTYNBEcqpJHZj7m6qtuhnfuH72kQedJZwY';
const SUPABASE_URL = 'https://ubrpbqqozfkjakttjedg.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAvsPlayers() {
    const response = await client
        .from('avalanche')
        .select('*');

    return checkError(response);
}

export async function getRpgClasses() {
    const response = await client
        .from('rpg_classes')
        .select('*');

    return checkError(response);
}

export async function getDogs() {
    const response = await client
        .from('dog_breeds')
        .select('*');

    return checkError(response);
}

export async function getLeagues() {
    const response = await client
        .from('sports_leagues')
        .select('*');

    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}