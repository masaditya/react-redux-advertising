import React from 'react'
import { Banner } from "../../components/Banner"

export const Privacy = () => {
    return (
        <div>
            <Banner title="PRIVACY" />

            <div className="container my-5 py-5 text">
                <p>Digital Agency Network is an indispensable resource for brands, agencies and global community of
                  marketers. Our website attracts over 120.000 visitors every month looking for the top digital
                  marketing
                  agencies, best practice advice, tips, tricks and insight into how to do business better online.</p>

                <p>We can help to raise awareness and drive leads from a relevant and engaged audience.</p>
                <h3 className="font-weight-bolder mt-5"> For Agencies</h3>
                <p>
                    We attract business opportunities and offer our member agencies tools to showcase their agency
                    to
                    the market. Along with the benefits of membership, DAN member agencies may expand their reach
                    through
                    native advertising and content marketing on our website.
                </p>
                <p>
                    For more information and to talk through your requirements, please contact us.
                </p>
                <h3 className="font-weight-bolder mt-5"> For Clients</h3>
                <p>
                    Our advertising opportunities drive high quality leads from a large and loyal audience of agency
                    executives and global community of marketers. We offer branded content opportunities to
                    suppliers,
                    vendors and event organisers to help them achieve their goals by lead generation and brand
                    awareness</p>
                <p>
                    For more information and to talk through your requirements, please contact us.
                </p>
            </div>

        </div>
    )
}
