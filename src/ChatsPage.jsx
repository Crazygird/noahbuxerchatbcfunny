import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div className='background'>
            <PrettyChatWindow 
                projectId='46bfe822-9cf7-4e14-897e-6c564e0a8f0e'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage;