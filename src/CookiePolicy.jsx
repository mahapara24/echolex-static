import React from 'react'
import Layout from './Layout'

const CookiePolicy = () => {
  return (
    <Layout>
      <div className="policy-page">
        <div className="policy-container">
          <h1>Cookie Policy</h1>
          <p className="policy-date">Last Updated: November 6, 2024</p>
        
        <section>
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
          </p>
        </section>

        <section>
          <h2>2. How We Use Cookies</h2>
          <p>
            Echolex uses cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and improve our services. We use cookies for the following purposes:
          </p>
        </section>

        <section>
          <h2>3. Types of Cookies We Use</h2>
          
          <h3>3.1 Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.
          </p>
          <ul>
            <li><strong>Session Cookies:</strong> Maintain your session while using the Service</li>
            <li><strong>Authentication Cookies:</strong> Keep you logged in to your account</li>
            <li><strong>Security Cookies:</strong> Protect against fraudulent activity</li>
          </ul>

          <h3>3.2 Performance and Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> Tracks website usage and performance</li>
            <li><strong>Usage Analytics:</strong> Monitors feature usage and user behavior</li>
          </ul>

          <h3>3.3 Functionality Cookies</h3>
          <p>
            These cookies allow the website to remember choices you make and provide enhanced, personalized features.
          </p>
          <ul>
            <li><strong>Language Preferences:</strong> Remembers your preferred language</li>
            <li><strong>Settings:</strong> Saves your customization preferences</li>
            <li><strong>User Preferences:</strong> Stores your interface preferences</li>
          </ul>

          <h3>3.4 Advertising and Marketing Cookies</h3>
          <p>
            These cookies are used to deliver relevant advertisements and track campaign performance. They may be set by advertising networks with our permission.
          </p>
        </section>

        <section>
          <h2>4. Third-Party Cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics and deliver advertisements. These include:
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> For website analytics</li>
            <li><strong>Social Media Platforms:</strong> For social sharing features</li>
            <li><strong>Advertising Partners:</strong> For targeted advertising</li>
          </ul>
        </section>

        <section>
          <h2>5. Cookie Duration</h2>
          <h3>5.1 Session Cookies</h3>
          <p>
            These cookies are temporary and are deleted when you close your browser. They are essential for the website to function during your visit.
          </p>

          <h3>5.2 Persistent Cookies</h3>
          <p>
            These cookies remain on your device for a set period or until you delete them. They help us recognize you when you return to our website.
          </p>
        </section>

        <section>
          <h2>6. Managing Cookies</h2>
          <p>
            You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.
          </p>

          <h3>6.1 Browser Settings</h3>
          <p>You can control cookies through your browser settings:</p>
          <ul>
            <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
            <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
            <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
            <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
          </ul>

          <h3>6.2 Impact of Disabling Cookies</h3>
          <p>
            Please note that disabling cookies may affect the functionality of our website. Some features may not work properly if cookies are disabled.
          </p>
        </section>

        <section>
          <h2>7. Do Not Track Signals</h2>
          <p>
            Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted. We do not respond to DNT signals at this time.
          </p>
        </section>

        <section>
          <h2>8. Local Storage and Similar Technologies</h2>
          <p>
            In addition to cookies, we may use other similar technologies such as:
          </p>
          <ul>
            <li><strong>Local Storage:</strong> Stores data locally in your browser</li>
            <li><strong>Session Storage:</strong> Temporary storage for your session</li>
            <li><strong>Web Beacons:</strong> Small images used to track email opens</li>
          </ul>
        </section>

        <section>
          <h2>9. Updates to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>
            If you have questions about our use of cookies, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> privacy@echolex.com<br />
            <strong>Address:</strong> 123 Audio St, Sound City<br />
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
        </section>
        </div>
      </div>
    </Layout>
  )
}

export default CookiePolicy

