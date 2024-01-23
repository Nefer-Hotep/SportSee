class UserPerformance {
  constructor({ userId, kind, data }) {
    // English to French mapping
    const kindMapping = {
      "cardio": "Cardio",
      "energy": "Energie",
      "endurance": "Endurance",
      "strength": "Force",
      "speed": "Vitesse",
      "intensity": "Intensité"
    };

    const order = [
      'Intensité',
      'Vitesse',
      'Force',
      'Endurance',
      'Energie',
      'Cardio',
    ];

    this.userId = userId;
    this.kind = kind;
    this.data = data.map((d) => ({
      value: d.value,
      // Replace English kind with French kind using the mapping
      kind: kindMapping[kind[d.kind.toString()]],
    }));

    this.data.sort((a, b) => {
      const indexA = order.indexOf(a.kind);
      const indexB = order.indexOf(b.kind);
      return indexA - indexB;
    });
  }
}

export default UserPerformance;
