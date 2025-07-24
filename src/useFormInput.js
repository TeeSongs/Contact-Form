import { useState } from 'react';

export function useFormInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  function handleChange(event) {
    setValue(event.target.value);
  }

  // Return inputProps and reset separately
  return {
    inputProps: {
      value,
      onChange: handleChange,
    },
    reset: () => setValue(''),
  };
}
