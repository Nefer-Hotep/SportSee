class UserActivityData {
    constructor ({ userId, sessions }) {
        this.userId = userId,
        this.sessions = sessions.map(session => ({
            day: new Date(session.day).getDate(),
            kilogram: session.kilogram,
            calories: session.calories
          }));
    }
}

export default UserActivityData