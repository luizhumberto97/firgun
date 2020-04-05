module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'abouts',
      [
        {
          value: 1,
          label: 'Linkedin',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          value: 2,
          label: 'Facebook',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          value: 3,
          label: 'Google',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
