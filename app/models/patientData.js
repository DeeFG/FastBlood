module.exports = function(sequelize, DataTypes) {
    var patientData = sequelize.define("PTData", {
      FirstName: DataTypes.STRING,
      LastName: DataTypes.STRING,
      birth:DataTypes.DATE,
      Antibodies: DataTypes.STRING,
      TypeAndScreen: DataTypes.BOOLEAN,


      
      Product: DataTypes.STRING,
      ProductQuantity: DataTypes.INTEGER
      
    });
    return patientData;
  };
  

// module.exports = function(sequelize, DataTypes) {
//     var Antibodies = sequelize.define("antigenFrequency", {

//       Antigen: DataTypes.STRING,
//       FrequencyWhites: DataTypes.INTEGER,
//       FrequencyBlacks:DataTypes.INTEGER
      
//     });
//     return Antibodies;
//   };
