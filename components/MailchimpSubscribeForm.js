const MailchimpSubscribeForm = ({ elementId, url, title, subtitle }) => (
  <div className="subscribe-container">
    <div id={`${elementId}mc_embed_signup`}>
      <form
        action={url}
        method="post"
        id={`${elementId}mc-embedded-subscribe-form`}
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
      >
        <div id={`${elementId}mc_embed_signup_scroll`}>
          <label className="subscribe-container__title" htmlFor="mce-EMAIL">
            {title}
          </label>

          {subtitle && <p className="subscribe-container__subtitle">{subtitle}</p>}

          <input
            type="email"
            defaultValue=""
            name="EMAIL"
            className="subscribe-container__email"
            id={`${elementId}mce-EMAIL`}
            placeholder="Your email address"
            required
          />
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input
              type="text"
              name="b_ccf94f5f6edf399b669741a47_a8d72ea287"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
          <div>
            <button
              type="submit"
              defaultValue="Subscribe"
              name="subscribe"
              id={`${elementId}mc-embedded-subscribe`}
              className="subscribe-container__submit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
)

export default MailchimpSubscribeForm
