import React from 'react'
import { Accordion } from 'react-bootstrap'
import MessageComp from '../components/MessageComp';


class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        }


    }

    render() {
        const { messages } = this.props;

        // let messageCards = [];
        // for (var i = 0; i < messages.length; i++) {

        //     let messageCard = <MessageComp dataKey={i} messageData={messages[i]}  />
        //     messageCards.push(messageCard);

        // }

        const messageCards = messages.map((message, index) => <MessageComp dataKey={index} messageData={message}  deleteMessage={this.props.deleteMessage} updateMessage={this.props.updateMessage} activeUser={this.props.activeUser}/>)

        return (
            <div>
                <Accordion defaultActiveKey="0">
                    {messageCards}
                </Accordion>  
            </div>

        );
    }
}


export default MessageList;
