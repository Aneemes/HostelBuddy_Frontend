import "./mailList.css"

const MailList = () => {
  return (
    <div class="mail">
      <h1 class="mailTitle">Save time, save money!</h1>
      <span class="mailDesc">Sign up and we'll send the best deals to you</span>
      <div class="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList