import { createClient } from '@supabase/supabase-js'

const supabaseUrl = ' https://yvpazpitdhkzegxoqcet.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2cGF6cGl0ZGhremVneG9xY2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwNTk0MTYsImV4cCI6MjA3MTYzNTQxNn0.5_FDH16rWpwtyxxC4fNjvVSDTF_3hdPNtkrvGS_z3DY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)