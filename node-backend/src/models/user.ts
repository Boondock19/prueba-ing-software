import { Model, DataTypes , Optional} from 'sequelize';
import { sequelize } from '../database/database';


interface UserAttributes { 
  id: number;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}


export interface UsertInput extends Optional<UserAttributes, 'id'> {}
export interface UserOuput extends Required<UserAttributes> {}
export interface GetAllUser {
  isDeleted?: boolean
  includeDeleted?: boolean
}

class User extends Model<UserAttributes, UsertInput> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}

User.init({
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
              isEmail: true,
          },
      },
  },{
    tableName: 'user',
    timestamps: true,
    sequelize // Deshabilitar los timestamps
  }
);

export default User