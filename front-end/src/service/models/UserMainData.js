import calorieLogo from '../../style/assets/icons/calories.svg';
import proteinsLogo from '../../style/assets/icons/proteins.svg'
import carbsLogo from '../../style/assets/icons/carbs.svg'
import lipidesLogo from '../../style/assets/icons/lipides.svg'

class UserMainData {
  constructor({ id, userInfos, todayScore, score, keyData }) {
    this.id = id;
    this.userInfos = {
      firstName: userInfos.firstName,
      lastName: userInfos.lastName,
      age: userInfos.age,
    };
    this.scoreData = [{ value: (todayScore || score) * 100 }];
    this.keyData = [
      {
        type: 'Calories',
        value: keyData.calorieCount,
        logo: calorieLogo,
        style: 'red',
      },
      {
        type: 'Protéines',
        value: keyData.proteinCount,
        logo: proteinsLogo,
        style: 'blue',
      },
      {
        type: 'Glucides',
        value: keyData.carbohydrateCount,
        logo: carbsLogo,
        style: 'yellow',
      },
      {
        type: 'Lipides',
        value: keyData.lipidCount,
        logo: lipidesLogo,
        style: 'pink',
      },
    ];
  }
}

export default UserMainData;
