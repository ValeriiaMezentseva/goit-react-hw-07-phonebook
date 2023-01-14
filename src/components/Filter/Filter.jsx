import { selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { FilterWrapper, Title, Input } from './Filter.styled';
import { setFilter } from 'redux/slice/sliceFilter';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const onChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value))
  }; 
    return (
        <FilterWrapper>
            <Title>Filter</Title>
            <Input onChange={onChangeFilter} name="filter" type="text" value={filter}></Input>
        </FilterWrapper>
    )
};

export default Filter; 
