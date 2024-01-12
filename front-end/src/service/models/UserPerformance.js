class UserPerformance {
    constructor({ userId, kind, data }) {
      this.userId = userId;
      this.kind = kind;
      this.data = data.map(d => ({
        value: d.value,
        kind: kind[d.kind.toString()]
      }));
    }
  }

  export default UserPerformance