class Hello extends React.Component {
    render() {
        return <div>Hello {this.props.toWhat}</div>
    
    }
}

// const root = ReactDOM.creatRoot(document.getElementById('root'));
// root.render(<Hello toWhat = 'Hello'/>)

export default Hello;