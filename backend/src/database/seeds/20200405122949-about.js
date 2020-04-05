module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'reasons',
      [
        {
          value: 1,
          label: 'Dividendos',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          value: 2,
          label: 'Financiamento',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          value: 3,
          label: 'Abertura de negocio',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
