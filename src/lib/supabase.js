import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qpgjxpjuliwzvofwkwjl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwZ2p4cGp1bGl3enZvZndrd2psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MjAzMzMsImV4cCI6MjA3NjI5NjMzM30.07q9PCera-o95CxCRKdwV0n5Pfx11xVXowIoZ6Rbioc'

export const supabase = createClient(supabaseUrl, supabaseKey)
