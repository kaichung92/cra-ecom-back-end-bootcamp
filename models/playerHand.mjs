export default function initPlayerHandModel(sequelize, DataTypes) {
  return sequelize.define(
    "playerHands",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      handid: {
        allowNull: false,
        references: {
          model: "tablePlayer",
          key: "handid",
        },
        type: DataTypes.INTEGER,
      },
      card: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    },
  );
}
