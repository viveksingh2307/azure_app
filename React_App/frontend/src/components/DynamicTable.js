import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const MultiSelectAutocomplete = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event, value) => {
    setSelectedOptions(value);
  };

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <Stack spacing={2} width={300}>
      <Autocomplete
        multiple
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Select options" placeholder="Favorites" />
        )}
      />
    </Stack>
  );
};

export default MultiSelectAutocomplete;