class UserAverageSessions {
  constructor({ userId, sessions }) {
    this.userId = userId;
    this.sessions = sessions.map((session) => ({
      day: this.getShortDayName(session.day),
      sessionLength: session.sessionLength,
    }));
  }

  getShortDayName(dayNumber) {
    const dayMap = {
      1: 'L', // Lundi
      2: 'M', // Mardi
      3: 'M', // Mercredi
      4: 'J', // Jeudi
      5: 'V', // Vendredi
      6: 'S', // Samedi
      7: 'D', // Dimanche
    };
    return dayMap[dayNumber];
  }
}

export default UserAverageSessions;
