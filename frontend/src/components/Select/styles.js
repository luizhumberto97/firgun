export default {
  container: (provided) => ({
    ...provided,
    minWidth: 265,
    marginLeft: -8,
  }),

  menu: (provided) => ({
    ...provided,
    padding: 20,
    width: '100%',
  }),

  control: () => ({
    display: 'block',
    height: 25,
    width: '100%',
  }),

  input: () => ({
    background: 'rgba(103, 106, 235, 0.3)',
    width: '100%',
    height: 25,
    paddingLeft: 15,
    borderRadius: '4px',
    fontSize: '1.2rem',
    color: 'rgba(0, 0, 0, 0.5)',
    border: '1px solid #676aeb',
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),

  indicatorsContainer: (provided) => ({
    ...provided,
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: -31,
  }),

  placeholder: (provided) => ({
    ...provided,
    display: 'block',
    paddingLeft: 15,
    color: 'rgba(0, 0, 0, 0.2)',
    fontWeight: 'bold',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition, marginLeft: 15 };
  },
};
