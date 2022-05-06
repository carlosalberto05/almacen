module.exports = (sequelize, dataTypes) => {
  let alias = "Categoria";

  let cols = {
    id_categorias: {
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
    tableName: "categorias",
    timestamps: false,
  };

  const Categoria = sequelize.define(alias, cols, config);

  Categoria.associate = function (models) {
    Categoria.hasMany(models.Producto, {
      as: "productos",
      foreignKey: "id_categori",
    });
    Categoria.hasMany(models.Categoria_Atributo, {
      as: "categoria_atributos",
      foreignKey: "id_categ",
    });
  };

  return Categoria;
};
