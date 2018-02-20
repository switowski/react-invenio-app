import React,{Component}  from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemText } from 'material-ui/List';

const styles = {
    root: {
        width: '100%',
        maxWidth: 360,
    },
};


class ListResult extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { results } = this.props;
        const listData = results.map((result, index) => (
            <ListItem key={index}>
                <ListItemText
                primary={result.title}
                secondary={result.description}/>
            </ListItem>
        ));

        return (
            <div className={styles.root}>
                <List>
                    {listData}
                </List>
            </div>
        );
    }
}

ListResult.propTypes = {
    results: PropTypes.array.isRequired,
};

export default ListResult;
