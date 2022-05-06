module.exports = (sequelize, dataTypes) => {
  let alias = "Producto";

  let cols = {
    id_productos: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nombre: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    sku: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    precio: {
      type: dataTypes.DECIMAL(4, 0),
    },
    imagen: {
      type: dataTypes.STRING(100),
    },
    id_categori: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    id_marca: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    tableName: "productos",
    timestamps: false,
  };

  const Producto = sequelize.define(alias, cols, config);

  Producto.associate = function (models) {
    Producto.belongsTo(models.Marca, {
      as: "marca",
      foreignKey: "id_marca",
    });
    Producto.belongsTo(models.Categoria, {
      as: "categoria",
      foreignKey: "id_categori",
    });
    Producto.hasMany(models.Categoria_Atributo, {
      as: "categoria_atributos",
      foreignKey: "id_product",
    });
  };

  return Producto;
};
