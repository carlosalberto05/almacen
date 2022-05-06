module.exports = (sequelize, dataTypes) => {
  let alias = "Atribu1";

  let cols = {
    id_atributos_uno: {
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
    tableName: "atributos_uno",
    timestamps: false,
  };

  const Atribu1 = sequelize.define(alias, cols, config);

  Atribu1.associate = function (models) {
    // Atribu1.hasMany(models.Cegoria_Atributos, {
    //   as: "categoria_atributos",
    //   foreignKey: "id_atrib1",
    // });
  };

  return Atribu1;
};
