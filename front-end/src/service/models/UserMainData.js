// models/UserMainData.js
class UserMainData {
  constructor({ id, userInfos, todayScore, score, keyData }) {
    this.id = id;
    this.userInfos = {
      firstName: userInfos.firstName,
      lastName: userInfos.lastName,
      age: userInfos.age,
    };
    this.scoreData = [{ value: (todayScore || score) * 100 }];
    this.keyData = {
      calorieCount: keyData.calorieCount,
      proteinCount: keyData.proteinCount,
      carbohydrateCount: keyData.carbohydrateCount,
      lipidCount: keyData.lipidCount,
    };
  }
}

export default UserMainData;
