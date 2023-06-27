const { createClient } = require('@supabase/supabase-js');
const { Sequelize } = require('sequelize');

const supabaseUrl = 'https://dsqzaucgchplpqrpxydu.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzcXphdWNnY2hwbHBxcnB4eWR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc3NDM3ODcsImV4cCI6MjAwMzMxOTc4N30.ICyWFgkxz2YTCX9BNELkEp6Awry-dgsqo32KZ2WnW2c';
const supabase = createClient(supabaseUrl, supabaseKey);

const config = {
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "Edusanthiago753951!",
  host: 'db.dsqzaucgchplpqrpxydu.supabase.co',
  dialect: "postgres",
  port: process.env.DB_PORT || 5432
};

const connectToSupabase = async () => {
  try {
    await supabase.auth.signIn({ email: 'thiagoedusan5.11@outlook.com', password: 'edusanthiago753951' });
    console.log('Conexão estabelecida com o Supabase.');

    await sequelize.authenticate();
    console.log('Conexão estabelecida com o PostgreSQL.');
  } catch (error) {
    console.error('Erro ao conectar ao Supabase e/ou PostgreSQL:', error.message);
  }
};

connectToSupabase();
module.exports = config;
