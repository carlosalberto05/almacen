module.exports = (sequelize, dataTypes) => {
  let alias = "Marca";

  let cols = {
    id_marcas: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
  };

  let config = {
    tableName: "marcas",
    timestamps: false,
  };

  const Marca = sequelize.define(alias, cols, config);

  Marca.associate = function (models) {
    Marca.hasMany(models.Producto, {
      as: "productos",
      foreignKey: "id_marca",
    });
  };

  return Marca;
};
