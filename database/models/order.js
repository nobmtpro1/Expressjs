'use strict';
const {
  Model
} = require( 'sequelize' );
module.exports = ( sequelize, DataTypes ) =>
{
  class Order extends Model
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate ( models )
    {
      // define association here
      Order.hasMany( models.OrderDetail, {
        foreignKey: 'order_id',
        targetKey: 'id'
      } )
    }
  }
  Order.init( {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    total: DataTypes.INTEGER,
    is_paid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
  } );
  return Order;
};