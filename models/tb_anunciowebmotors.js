const Tb_AnuncioWebmotors = (sequelize, DataTypes) => {
  const Tb_AnuncioWebmotors = sequelize.define("Tb_AnuncioWebmotors", {
    marca:DataTypes.STRING(45),
    modelo: DataTypes.STRING(45),
    versao: DataTypes.STRING(45),
    ano: DataTypes.INTEGER,
    quilometragem: DataTypes.INTEGER,
    observacao: DataTypes.TEXT
  }, {
    tableName: "tb_AnuncioWebmotors",
    underscored: true,
    timestamps: false
  })

  return Tb_AnuncioWebmotors;
}

module.exports = Tb_AnuncioWebmotors;
