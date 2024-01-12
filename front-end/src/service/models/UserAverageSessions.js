class UserAverageSessions {
  constructor({ userId, sessions }) {
    this.userId = userId;
    this.sessions = sessions.map((session) => ({
      day: session.day,
      sessionLength: session.sessionLength,
    }));
  }
}

export default UserAverageSessions;
