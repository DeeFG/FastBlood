module.exports = function(sequelize, DataTypes) {
    var patientData = sequelize.define("PTData", {
     
      HRN: DataTypes.INTEGER,
      FirstName: DataTypes.STRING,
      LastName: DataTypes.STRING,
      birth:DataTypes.DATE,
      Antibodies: DataTypes.STRING
    });
    return patientData;
  };
  

