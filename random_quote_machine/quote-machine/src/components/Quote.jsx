import React from "react";

const QUOTES = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
const TWITTER_PREFIX = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
const TUMBLR_PREFIX = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='
const TUMBLR_SUFFIX = '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'

class Quote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: '',
            author: '',
            a: 'https://maxogod.',
            b: 'github.io/',
        }
        this.newQuote = this.newQuote.bind(this)
        this.tweet = this.tweet.bind(this)
        this.tumblr = this.tumblr.bind(this)
        this.fetchQuotes = this.fetchQuotes.bind(this)
    }

    fetchQuotes() {
        (async () => {
            const res = await fetch(QUOTES)
            const data = await res.json()
            const arr = data.quotes
            const index = arr[Math.floor(Math.random() * arr.length)]
            this.setState({quote: index.quote, author: index.author})
            this.props.changeColor()
        })()
    }

    componentDidMount() {
        this.fetchQuotes()
    }

    newQuote() {
        this.fetchQuotes()
    }

    tweet() {
        const url = TWITTER_PREFIX + this.state.quote + '  ~' +this.state.author
        window.location.href = url;
    }

    tumblr() {
        const url = TUMBLR_PREFIX + this.state.quote + '  ~' +this.state.author + TUMBLR_SUFFIX
        window.location.href = url;
    }

    render() {
        const buttonStyle = {background: this.props.color, color: 'white', transition: '250ms'}
        return (
            <div id="quote" className="card" style={{width: '35vw'}}>
                <div className="card-body">
                    <h4 id="quote" className="card-title" style={{textAlign: 'center', color: this.props.color}}>
                        <i className="fa fa-quote-left"></i> {this.state.quote}
                    </h4>
                    <p id="author" className="card-text mb-5" style={{textAlign: 'right', color: this.props.color}}>
                        ~{this.state.author}
                    </p>
                    <div className="container d-flex mb-4 p-0 ">
                        <div className="buttons-left col-9 container d-flex gap-1">
                            <button className="btn col-2" style={buttonStyle} onClick={this.tweet}><i className="fa fa-twitter"></i></button>
                            <button className="btn col-2" style={buttonStyle} onClick={this.tumblr}><i className="fa fa-tumblr"></i></button>
                        </div>
                        <div className="buttons-right col">
                            <button className="btn" style={buttonStyle} onClick={this.newQuote}>New Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quote;