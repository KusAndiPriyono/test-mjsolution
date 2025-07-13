import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qnadaemrojicannnnhyj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuYWRhZW1yb2ppY2Fubm5uaHlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzMzkyMTIsImV4cCI6MjA2NzkxNTIxMn0.kuc7soEwq7JMkD-r8GDzaF1D3JjevAwmGUDzgof-3vk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
