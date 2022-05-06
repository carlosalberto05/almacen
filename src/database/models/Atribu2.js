module.exports = (sequelize, dataTypes) => {
  let alias = "Atribu2";

  let cols = {
    id_atributos_dos: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
  };

  let config = {
    tableName: "atributos_dos",
    timestamps: false,
  };

  const Atribu2 = sequelize.define(alias, cols, config);

  Atribu2.associate = function (models) {
    // Atribu2.hasMany(models.Cegoria_Atributos, {
    //   as: "categoria_atributos",
    //   foreignKey: "id_atrib2",
    // });
  };

  return Atribu2;
};
