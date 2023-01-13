import PropTypes from 'prop-types'
import { FilterWrapper, Title, Input } from './Filter.styled';

const Filter = ({ onSearch, value }) => {
    return (
        <FilterWrapper>
            <Title>Filter</Title>
            <Input onChange={onSearch} name="filter" type="text" value={value}></Input>
        </FilterWrapper>
    )
};

export default Filter; 

Filter.propTypes = {
    onSearch: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};