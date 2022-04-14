import React, {FC, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {SIZES} from '../../constants';
import {SetItem} from '../../state/action-creators';
import {LocationsList} from '../../state/actions';

type PickerProps = {
  items: LocationsList;
  placeholder: string;
  setSelectedItem: SetItem;
};

export const PickerElement: FC<PickerProps> = props => {
  const {items, placeholder, setSelectedItem} = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [_items, setItems] = useState(items);

  useEffect(() => {
    setSelectedItem(value);
  }, [value]);

  return (
    <DropDownPicker
      style={{
        borderColor: 'transparent',
      }}
      dropDownContainerStyle={{
        borderColor: 'transparent',
      }}
      listItemLabelStyle={{color: '#576468'}}
      closeAfterSelecting
      placeholder={placeholder}
      placeholderStyle={{
        color: '#9ba8ad',
        fontSize: SIZES.height * 0.02,
        fontWeight: '500',
      }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      searchable
      searchPlaceholder={`Type ${placeholder.toLowerCase()}`}
      searchTextInputStyle={{
        borderColor: '#6b7b80',
      }}
      searchContainerStyle={{borderBottomColor: 'transparent'}}
      showTickIcon
    />
  );
};
