import Select, { components } from 'react-select';
import React from 'react';

const data = [
  { subtitle: 'CategoryText', label: 'Sample Text', value: 'CategoryText' },
  { subtitle: 'Attribute: Brand', label: 'GAP', value: 'Attribute: Brand' },
  {
    subtitle: 'Destination URL',
    label: 'https://nike.com/shoes_big_boots',
    value: 'Destination URL',
  },
  { subtitle: 'Status', label: 'Enabled', value: 'Status' },
  {
    subtitle: 'Content URL',
    label: 'https://gq.com/cool-fits-of-the-week',
    value: 'Content URL',
  },
  {
    subtitle: 'Attribute: Product',
    label: 'Big Boots 2.0',
    value: 'Attribute: Product',
  },
  { subtitle: 'Date: Month', label: 'December 2021', value: 'Date: Month' },
];

const formatOptionLabel = ({ subtitle, label }) => (
  <div className='small  p-2 w-100 border-bottom'>
    <span className='small text-capitalize'>{subtitle}</span>
    <div className='font-weight-bold text-capitalize'>{label}</div>
  </div>
);

const EMOJIS = [
  <img
    src={require('../../images/main/tagContent/search.svg').default}
    alt='Search'
  />,
];

const Control = ({ children, ...props }) => {
  const { emoji, onEmojiClick } = props.selectProps;

  return (
    <components.Control {...props}>
      <span onMouseDown={onEmojiClick} className='d-flex ml-2'>
        {emoji}
      </span>
      {children}
    </components.Control>
  );
};

export const SelectCustom = React.memo(
  ({ selectedItems, setSelectedItems }) => {
    const emoji = EMOJIS[0];

    const customStyles = {
      menu: (provided, state) => ({
        ...provided,
        width: '100%',

        color: state.selectProps.menuColor,
        padding: 0,
        margin: 0,
      }),

      menuList: (provided) => ({
        ...provided,
        padding: 0,
      }),

      indicatorsContainer: (provided) => ({
        ...provided,
        display: 'none',
      }),

      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#333' : '#333',
        backgroundColor:
          state.isFocused && !state.isSelected
            ? '#eee'
            : state.isSelected
            ? '#dae0e5'
            : '#eee',
        padding: 0,
      }),

      control: () => ({
        width: '100%',
        display: 'flex',
        border: '1px solid #999',
        borderRadius: '9px',
        fontSize: 14,
      }),

      singleValue: (provided) => ({
        ...provided,
        width: '100%',
        padding: 0,
      }),
    };

    return (
      <div className='react-select-container'>
        <Select
          styles={customStyles}
          emoji={emoji}
          isMulti
          isClearable
          selectedItems={selectedItems}
          // onEmojiClick={onClick}
          name='emoji'
          controlShouldRenderValue={false}
          isSearchable
          placeholder={
            selectedItems?.length > 0
              ? `${selectedItems.length} Items Selected`
              : 'Search all tags by attribute, month, URL or status'
          }
          hideSelectedOptions={false}
          components={{ Control }}
          onChange={(value) => setSelectedItems(value)}
          options={data}
          formatOptionLabel={formatOptionLabel}
        />
      </div>
    );
  }
);
