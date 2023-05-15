import "dotenv/config"
import { Sequelize } from 'sequelize';


// Crea una nueva instancia de Sequelize con la configuración de conexión
export const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
  );

