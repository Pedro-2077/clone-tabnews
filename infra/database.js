import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  }); //Comando sincrono instântaneamente um objeto parado mais que está pronto para conectar no banco quando agente quiser
  await client.connect(); //isso é um comando assincrono, ele precisa ir no banco para se conctar, por isso precisamos usar o await e async
  const resultado = await client.query(queryObject); //Esse queryObject vem da assinatura do método
  await client.end(); //Não deixa a conecxão pendurada
  return resultado;
}

export default {
  query: query,
};
