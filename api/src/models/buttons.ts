import { Model, DataTypes } from 'sequelize'
import sequelize from '../db'

class Button extends Model {
  public id!: number
  public name!: string
  public clicks!: number
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Button.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    colorDefault: {
      type: DataTypes.STRING,
      defaultValue: '#ffffff'
    },
    colorHover: {
      type: DataTypes.STRING,
      defaultValue: '#ffffff'
    },
    colorText: {
      type: DataTypes.STRING,
      defaultValue: '#000000'
    },
    size: {
      type: DataTypes.STRING,
      defaultValue: 'md'
    },
    text: {
      type: DataTypes.STRING
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true
    },
    clicks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    sequelize,
    modelName: 'Button',
    timestamps: false
  }
)

export default Button
