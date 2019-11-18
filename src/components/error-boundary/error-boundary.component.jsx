import React from 'react'; 

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) { // this method allows us to catch the error ahead of time from any child components - then conditionally return some fallback UI.
        // process the error
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log(error); 
    }

    render() {
        if(this.state.hasErrored) {
            return <div>Something went wrong...</div>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
