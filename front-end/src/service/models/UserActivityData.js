class UserActivityData {
    constructor ({ userId, sessions }) {
        this.userId = userId,
        this.sessions = sessions.map(session => ({
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories
          }));
    }
}

export default UserActivityData