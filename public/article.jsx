import React, {Component} from 'react';
import request from 'superagent';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }

  render() {
    return <div>
      <div>
        <input type="text" placeholder="title"
               value={this.state.title}
               onChange={this._onTitleChange.bind(this)}/>
      </div>
      <div>
        <textarea placeholder="content"
                  value={this.state.content}
                  onChange={this._onContentChange.bind(this)}/>
      </div>
      <div>
        <button type="submit" onClick={this._onSubmit.bind(this)}>提交</button>
      </div>
    </div>
  }

  _onTitleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  _onContentChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  _onSubmit() {
    request.post('/api/articles')
      .send({
        title: this.state.title,
        content: this.state.content
      })
      .end((err, res) => {
        if (err) return console.error(err);
        console.log(res.statusCode);
      })
  }

}
