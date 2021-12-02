import React from 'react'
import Head from 'next/head'

function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(defaultValue);
  
    React.useEffect(() => {
      const stickyValue = window.localStorage.getItem(key);
  
      if (stickyValue !== null) {
        setValue(JSON.parse(stickyValue));
      }
    }, [key]);
  
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  }

export default function About() {
    // static async getInititalProps (props) {
    //     const {query} = props
    //     const {token, refreshToken} = query
    //     if(localStorage) {
    //         localStorage.setItem('token2', token)
    //         localStorage.setItem('refreshToken2', refreshToken)
    //     }

    //     return {
    //         query, 
    //     }
    // }

    // componentDidMount() {
    //     console.log("Client side ")
    //     const {token, refreshToken} = this.props.query
    //     localStorage.setItem('token', token)
    //     localStorage.setItem('refreshToken', refreshToken)

    // }
    const [mode, setMode] = useStickyState("day", "mode");
    return (
        <div className="container">
        <select onChange={ev => setMode(ev.target.value)} value={mode}>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
  
        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>              
    )
}
