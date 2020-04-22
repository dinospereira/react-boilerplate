import React from 'React';
import PropTypes from 'prop-types';

export default class DefaultErrorBoundary extends React.Component {
    state = {
        isError: false,
    };

    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    static getDerivedStateFromError() {
        return { isError: true };
    }

    render() {
        const { isError } = this.state;
        const { children } = this.props;

        return isError ? <div>Something went wrong.</div> : children;
    }
}
