const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVicnBicXFvemZramFrdHRqZWRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5NzI1NzksImV4cCI6MTk2MzU0ODU3OX0.suvrkIHVzCTYNBEcqpJHZj7m6qtuhnfuH72kQedJZwY';
const SUPABASE_URL = 'https://ubrpbqqozfkjakttjedg.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getData() {
    const response = await client
        .from('avalanche')
        .select('*');

    return response;
}