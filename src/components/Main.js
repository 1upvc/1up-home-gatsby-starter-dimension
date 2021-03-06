import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="build"
          className={`${this.props.article === 'build' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Build with Us</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          </p>
          <p>
            Our mission is to simple: ideas grow to follow known and unknown paths.
            We strive to make ideas sustainable with a positive impact.
            </p>
            <p>
            Our Build strategy focuses on known and unknown support:
            <ul>
              <li>Asset Strategy</li>
              <li>Product Design</li>
              <li>Security</li>
              <li>Supply Chain Management</li>
              <li>Unknown Factors or Z Factors</li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="stake"
          className={`${this.props.article === 'stake' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Stake with Confidence</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            </p>
            <p>
            We beleive in a decentralized future of commerce and are supporters
            of the <a href='https://cardano.org/'>Cardano Project</a>.  Staking provides an opportunity
            for securing the Cardano network by processing data and keeping the network trusted.
            </p>
            <p>
            The ability to delegate a stake is fundamental to how Cardano network is secured.
            Our staking pools groups are based in North America and aimed at helping others maximize digital asset rewards by making staking or data processing
            accessible as a source of value to anyone.   ADA held on the Cardano network represents a stake in the network, with the size of the
            stake proportional to the amount of ADA held.  Details of stake pool(s) we support are located below.
            </p>
            <p>
            Participate by delegating to the following pool(s):
            <li>Ticker(s): CAIRN</li>
            <li>Expected Annual Reward Rate: ~3-10% </li>
            <li>Commission: Coming Soon </li>
            <li>Delegation Hash: Coming Soon</li>
            <li>Machine Specs: Coming Soon</li>
            <li>Pool Margin: Coming Soon</li>
            <li>Pledge: Coming Soon</li>
            <li>Payout Frequency: Every Epoch (~5 days)</li>
            <li>Potential Rewards Per Epoch: Coming Soon</li>
            </p>
            <p>
            Stake with other Partners & Guidance
            </p>
            <p>
            Interested in working with an larger partner to expand your network?  We've got you covered.
            Check out <a href='https://staked.us/'>Staked.US</a>.
            </p>
            <p>
            If interested, please reach out for an introduction to stake digital assets with a Partner.
            Alternatively, use the following details Partner Link: <a href='staked.us/?pid=FDrCpe2et1'>Staked.US</a> | Code: FDrCpe2et1
            </p>
            <p>
            For further guidance on Cardano and stake pools, please
            navigate to <a href='https://cardano.org/stake-pool-operation/'>Cardano Stake Pool Operation for Developers</a>.  To learn how to
            delegate your Cardano (ADA), navigate to
            video <a href='https://www.youtube.com/watch?v=VtkjM_0k4R0'>Delegating in Daedalus Wallet for Cardano</a>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Established in 2020, CAIRNZ is dedicated to providing a sustainable path to ideas.  Often, the path to success has Unknown
            and unknown markers.  Navigating is the path or cairn and what to do when unknown (z) can make all the difference.  while help
            with security and network based solutions for organizations to understand their path.

            Special Thanks
            </p>
            <p>
            Special thanks to <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#" netlify-honeypot="bot-field" data-netlify="true" name="contact" onSubmit='submit'>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://angellist.com" className="icon fa-angellist">
                <span className="label">AngelList</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
