import React from 'react'
import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import '../Footer.css'

export default function Footer() {
  const socials = [
    { label: 'Email', value: 'lightningcyranus@gmail.com', icon: <MdEmail size={18} /> },
    { label: 'LinkedIn', value: 'https://www.linkedin.com/in/cyprian-kiprop-147b62227/', icon: <FaLinkedin size={18}/> },
    { label: 'GitHub', value: 'github.com/cypriankiprop', icon: <FaGithub size={18} /> },
  ]

  return (
    <div className="footer">

      <div className="footerPitch">
        <div className="footerPitchLeft">
          <p className="footerEyebrow">Get in touch</p>
          <h2 className="footerHeading">Let's build something <span className="footerAccent">great together.</span></h2>
          <p className="footerSub">Open to full-time roles, freelance projects, and interesting conversations. Based in Nairobi — happy to work across time zones.</p>
          <div className="footerPills">
            <span className="footerPill footerPillPrimary">Available now</span>
            <span className="footerPill">Nairobi, Kenya</span>
            <span className="footerPill">EAT (UTC+3)</span>
          </div>
        </div>

        <div className="footerContact">
          {socials.map((s, i) => (
            <div className="footerContactItem" key={i}>
              <div className="footerContactIcon">{s.icon}</div>
              <div className="footerContactText">
                <span className="footerContactLabel">{s.label}</span>
                <span className="footerContactVal">{s.value}</span>
              </div>
              <span className="footerContactArrow">→</span>
            </div>
          ))}
        </div>
      </div>

      <div className="footerBar">
        <span className="footerLogo">CK.</span>
        <div className="footerLinks">
          <span className="footerLink">Privacy</span>
          <span className="footerLink">Terms</span>
          <span className="footerLink">Docs</span>
          <span className="footerLink">Status</span>
        </div>
        <span className="footerCopy">© 2026 Cyprian Kiprop. All rights reserved.</span>
      </div>

    </div>
  )
}