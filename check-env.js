/**
 * Script de diagnóstico para verificar la configuración del entorno
 */

import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargar variables de entorno
config();

console.log('\n🔍 DIAGNÓSTICO DE CONFIGURACIÓN\n');
console.log('='.repeat(60));

// Verificar archivo .env
const envPath = join(__dirname, '.env');
const envExists = existsSync(envPath);

console.log('\n📁 Archivo .env:');
console.log(`   Existe: ${envExists ? '✅ Sí' : '❌ No'}`);

if (envExists) {
  const envContent = readFileSync(envPath, 'utf-8');
  const lines = envContent.split('\n').filter(line => line.trim() && !line.startsWith('#'));
  console.log(`   Líneas configuradas: ${lines.length}`);
  
  if (lines.length === 0) {
    console.log('   ⚠️  El archivo está vacío');
  } else {
    console.log('\n   Variables encontradas:');
    lines.forEach(line => {
      const [key] = line.split('=');
      console.log(`   - ${key}`);
    });
  }
}

// Verificar variables de entorno
console.log('\n🔑 Variables de entorno:');
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

console.log(`   SUPABASE_URL: ${supabaseUrl ? '✅ Configurada' : '❌ No configurada'}`);
if (supabaseUrl) {
  console.log(`   Valor: ${supabaseUrl}`);
}

console.log(`   SUPABASE_ANON_KEY: ${supabaseKey ? '✅ Configurada' : '❌ No configurada'}`);
if (supabaseKey) {
  console.log(`   Valor: ${supabaseKey.substring(0, 20)}...`);
}

// Verificar archivo .env.example
console.log('\n📋 Archivo .env.example:');
const envExamplePath = join(__dirname, '.env.example');
const envExampleExists = existsSync(envExamplePath);
console.log(`   Existe: ${envExampleExists ? '✅ Sí' : '❌ No'}`);

if (envExampleExists) {
  const exampleContent = readFileSync(envExamplePath, 'utf-8');
  console.log('\n   Contenido:');
  console.log('   ' + exampleContent.split('\n').join('\n   '));
}

// Resumen
console.log('\n' + '='.repeat(60));
console.log('📊 RESUMEN\n');

if (!envExists) {
  console.log('❌ El archivo .env NO existe');
  console.log('\n💡 Solución:');
  console.log('   1. Copia .env.example a .env:');
  console.log('      cp .env.example .env');
  console.log('   2. Edita .env con tus credenciales de Supabase');
} else if (!supabaseUrl || !supabaseKey) {
  console.log('❌ El archivo .env existe pero está incompleto');
  console.log('\n💡 Solución:');
  console.log('   Edita el archivo .env y agrega:');
  console.log('   SUPABASE_URL=https://tu-proyecto.supabase.co');
  console.log('   SUPABASE_ANON_KEY=tu_anon_key_aqui');
} else {
  console.log('✅ Configuración completa');
  console.log('\n   El archivo .env está correctamente configurado.');
  console.log('   Si el API sigue fallando, verifica:');
  console.log('   1. Que la tabla "contacts" exista en Supabase');
  console.log('   2. Que RLS esté configurado correctamente');
  console.log('   3. Que el servidor esté reiniciado después de cambiar .env');
}

console.log('\n' + '='.repeat(60) + '\n');
