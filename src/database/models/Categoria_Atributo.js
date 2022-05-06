module.exports = (sequelize, dataTypes) => {
  let alias = "Categoria_Atributo";

  let cols = {
    id_cat_atribut: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    id_cat: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    id_atrib1: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    id_atrib2: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    id_product: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    tableName: "categorias_atributos",
    timestamps: false,
  };

  const Categoria_Atributo = sequelize.define(alias, cols, config);

  Categoria_Atributo.associate = function (models) {
    Categoria_Atributo.belongsTo(models.Categoria, {
      as: "categ",
      foreignKey: "id_categ",
    });
    Categoria_Atributo.belongsTo(models.Atribu1, {
      as: "atrib1",
      foreignKey: "id_atrib1",
    });
    Categoria_Atributo.belongsTo(models.Atribu2, {
      as: "atrib2",
      foreignKey: "id_atrib2",
    });
    Categoria_Atributo.belongsTo(models.Producto, {
      as: "product",
      foreignKey: "id_product",
    });
  };

  return Categoria_Atributo;
};
