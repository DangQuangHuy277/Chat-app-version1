export default function Message() {
  return (
    <div className='chat__message sender'>
      <div className='message__container'>
        <span className='chat__name'>Name</span>
        <p>This is a message</p>
        <span className='chat__timestamp'>3:52pm</span>
      </div>
    </div>
  );
}
